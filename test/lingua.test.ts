import languages from '../src/languages';

test('It should be get all languages', () => {
  expect(languages.all().length).toBe(184);
});

test('should find a language by code', () => {
  expect(languages.find('en')).toEqual(
    expect.objectContaining({
      code: 'en',
      name: 'English',
    })
  );
});

test('should filter languages by name', () => {
  expect(languages.filter('Spanish')).toHaveLength(1);
});
