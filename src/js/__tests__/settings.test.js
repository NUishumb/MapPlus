import Settings from '../Settings';

test('should return default settings', () => {
    const settings = new Settings();
    settings.customSettings = { theme: 'yellow' };
    expect(settings.customSettings).toEqual({ theme: 'dark', music: 'trance', difficulty: 'easy' });
});

test('should return user settings', () => {
    const settings = new Settings();
    settings.customSettings = { theme: 'gray', music: 'pop' };
    expect(settings.customSettings).toEqual({ theme: 'gray', music: 'pop', difficulty: 'easy' });
});

test('should return user settings 2', () => {
    const settings = new Settings();
    settings.customSettings = { music: 'off', difficulty: 'nightmare' };
    expect(settings.customSettings).toEqual({ theme: 'dark', music: 'off', difficulty: 'nightmare' });
});
