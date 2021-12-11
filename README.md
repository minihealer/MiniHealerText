# Mini Healer Text

A text tracker for the awesome game Mini Healer on Steam. https://store.steampowered.com/app/955740/Mini_Healer/

The 🔥en_us is the main folder that contains english text. It also helps track changes from versions. It will sync with the dev version.

The other folders are localizations that maps to english text. They will sync up with en_us and progress will be tracked in Commits.

Feel free to submit Issue for error, remind updating...etc.

All rights reserved to 💪Sad Doge

Current process: Doge updates en_us -> whitecafe(or community as a whole) updates en_cn_s -> doge(or community as a whole) updates en_cn_t via https://www.lexilogos.com/keyboard/chinese_conversion.htm



Translating Instructions
- Each line is a key-value pair, for example `SKILL_COOLDOWN=Cooldown` has key equal to `SKILL_COOLDOWN` and value equal to `Cooldown`. When translating, only translate the value and not the key. The game will use the key and the language setting to find which value to use. So `SKILL_COOLDOWN=Cooldown` in Japanese will look like `SKILL_COOLDOWN=クールダウン`
- Sometimes you will see things wrapped in curly brackets like `{0}`. This is to indicate dynamic value(usually a number) to the game and I understand that different languages will have different grammar and formatting so you can freely move this around.
- Sometimes you will see things wrapped in square brackets like `[SKILL_COOLDOWN]`. This is to indicate link to the game, meaning when the game runs it will use the value of `SKILL_COOLDOWN` key. This is to increase reuseability so we don't have to translate the same thing over and over
- Sometimes you will see things like ` <color=#B58300FF>Midnight Zone</color>` or `<br>`. These are formatting tags to indicates different colored text or an new line.
