import { Language } from './interface';
import languages from './data/languages.json';

export default {
  // Returns an array of all languages
  all: (): Array<Language> => languages,

  // Finds a language by name
  find: (name: string): Language | undefined => {
    return languages.find(
      (gwlc: Language) => gwlc.name === name || gwlc.code === name
    );
  },

  // Filters languages by a search term (case-insensitive)
  filter: (term: string): Array<Language> => {
    const searchTerm = term.toLowerCase();
    return languages.filter((gwlc: Language) =>
      gwlc.name.toLowerCase().includes(searchTerm)
    );
  },
};
