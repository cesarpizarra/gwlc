export interface Language {
  code: string;
  name: string;
}

export interface MappedLanguage extends Language {
  languages: Array<string>;
}
