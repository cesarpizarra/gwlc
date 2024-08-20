export interface Lingua {
  code: string;
  name: string;
}

export interface MappedLingua extends Lingua {
  languages: Array<string>;
}
