# Mini Healer Text

A text tracker for the awesome game Mini Healer on Steam. https://store.steampowered.com/app/955740/Mini_Healer/

## Files to be Localized
The 🔥en_us is the main folder that contains all the texts the game is using. It also helps track changes from versions. It will sync with the dev version.
The other folders are localizations that maps to english text. They will sync up with en_us and progress will be tracked in Commits.

If you are translating into a new language you can create a new folder and copy all the en_us files into it and translate each line following the instruction below.

## Translating Instructions
- Each line is a key-value pair, for example `SKILL_COOLDOWN=Cooldown` has key equal to `SKILL_COOLDOWN` and value equal to `Cooldown`. When translating, only translate the value and not the key. The game will use the key and the language setting to find which value to use. So `SKILL_COOLDOWN=Cooldown` in Japanese will look like `SKILL_COOLDOWN=クールダウン`
- Sometimes you will see things wrapped in curly brackets like `{0}`. This is to indicate dynamic value(usually a number) to the game and I understand that different languages will have different grammar and formatting. These are values you can freely move around to fit the language's grammar.
- Sometimes you will see things wrapped in square brackets like `[SKILL_COOLDOWN]`. This is to indicate link to the game, meaning when the game runs it will use the value of `SKILL_COOLDOWN` key. This is to increase reuseability so we don't have to translate the same thing over and over
- Sometimes you will see things like ` <color=#B58300FF>Midnight Zone</color>` or `<br>`. These are formatting tags to indicates different colored text or an new line.
- You might bump into enemy names or boss names or talent names...etc that might not be easily translated. The best case scenario is to try to perserve the spirit of the name but sometimes you can be a bit creative

#### Chinese Traditional Localization Process
whitecafe(or community as a whole) updates en_cn_s -> doge(or community as a whole) updates en_cn_t via https://www.lexilogos.com/keyboard/chinese_conversion.htm




All rights reserved to 💪Sad Doge<br />
Feel free to submit Issue for error, remind updating...etc. Or put up a PR here! 🚀 <br />
Any contribution is greatly appreciated 🙏, don't hesitate to reach out if you want your name to appear in the game!<br />
