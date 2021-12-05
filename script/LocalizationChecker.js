const Path = require("path");
const FS   = require("fs");
const readline   = require("readline");

const FOLDER_PATH= '../Local';

const RESULT = {
    'en_US':{},
    'en_CN_S':{},
    'en_CN_T':{},
    'en_JP':{},
    // 'en_RU':{}
}

// This script will run through all enUS folder
// generate a master keyValueMap looks like below
/*
    {
        [LANGUAGE]:{
            [KEY]:number
        }
    }

    the number is the number of {0} string formatting in the line
    This is to check if all other localization lines have the same number of string formatted as the english one
    The script also check if keys are missing
*/

countNumberOfStringFormatting = (key, inputString) => {
    let count = 0;

    let isOpen = false;

    for (let index = 0; index < inputString.length; index++) {
        const element = inputString[index];
        
    
        if(element == '{'){
            if(isOpen){
                console.log(`WARNING, found open bracket w/o closed bracket ${key}`);
            }

            count +=1;
            isOpen = true;
        }
        else if(element == '}'){
            if(!isOpen){
                console.log(`WARNING, found closing bracket w/o open bracket ${key}`);
            }

            isOpen = false;
        }
    }




    return count;
}

async function scanFolder(Directory, language) {
    const files = FS.readdirSync(Directory);


    for (const File of files) {
        const Absolute = Path.join(Directory, File);

        if (FS.statSync(Absolute).isDirectory()) {
            await scanFolder(Absolute, language);
        }
        // skip meta files
        else if(Absolute.indexOf('meta') != -1) {
            continue;
        }
        else {
            await processLineByLine(Absolute, language);
        }
    }

}

async function processLineByLine(filePath, language) {
    const fileStream = FS.createReadStream(filePath);
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    for await (const line of rl) {
      if(line == "" || line == "END") { continue; }

      const value = line.slice(line.indexOf('=') + 1);
      const key = line.slice(0, line.indexOf('='));


      if(key){
        if(!value){
            RESULT[language][key] = 0;
        }else{
            const count =  countNumberOfStringFormatting(key, value);
            RESULT[language][key] = count;
        }
      }else{
        console.log(`WARNING, can't split ${line} ${key}`);  
      }
    }
}


(async() => {
    
    const languageKeys = Object.keys(RESULT);

    console.log('Generating Map....');
    for (const LANGUAGE of languageKeys) {    

        const dir = `${FOLDER_PATH}\\${LANGUAGE}\\`;


        await scanFolder(dir, LANGUAGE);
    }


    // loop through none US one to do the check
    for (const LANGUAGE of languageKeys) {    
        if(LANGUAGE == 'en_US'){
            continue;
        }

        console.log(`Comparing....${LANGUAGE}`);
        const US_KEYS = Object.keys(RESULT['en_US']);


        for (const LINE_KEY of US_KEYS) {    
            const number = RESULT[LANGUAGE][LINE_KEY];
            const usNumber = RESULT['en_US'][LINE_KEY];

            // can't find in US, that's ok because it might be deleted
            if(usNumber == undefined){
                continue;
            }

            if(usNumber != undefined && number == undefined){
                console.log(`ERROR: key ${LINE_KEY} not found in ${LANGUAGE}`);
            }
            else if(number != usNumber){
                console.log(`ERROR: key ${LINE_KEY} US-${usNumber} ${LANGUAGE}-${number}`);
            }
        }
    }
})();
