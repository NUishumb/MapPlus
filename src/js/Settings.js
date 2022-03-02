export default class Settings {
    constructor() {
        this.defaultSettings = new Map();
        this.defaultSettings.set('options', { theme: 'dark', music: 'trance', difficulty: 'easy' });
        this.userSettings = new Map();
        this.allowedThemes = ['dark', 'light', 'gray'];
        this.allowedMusic = ['trance', 'pop', 'rock', 'chillout', 'off'];
        this.allowedDiff = ['easy', 'normal', 'hard', 'nightmare'];
    }

    get customSettings() {
        return {
            ...this.defaultSettings.get('options'),
            ...this.userSettings.get('options'),
        };
    }

    set customSettings(options) {
        this.userSettings.set('options', {});
        if (this.allowedThemes.includes(options.theme)) {
            this.userSettings.get('options').theme = options.theme;
        }
        if (this.allowedMusic.includes(options.music)) {
            this.userSettings.get('options').music = options.music;
        }
        if (this.allowedDiff.includes(options.difficulty)) {
            this.userSettings.get('options').difficulty = options.difficulty;
        }
    }
}
