import { Lingua } from './LinguaInterface';
import languages from './data/languages.json';

export default {
  // Returns an array of all languages
  all: (): Array<Lingua> => languages,

  // Finds a language by name
  find: (name: string): Lingua | undefined => {
    return languages.find(
      (lingua: Lingua) => lingua.name === name || lingua.code === name
    );
  },

  // Filters languages by a search term (case-insensitive)
  filter: (term: string): Array<Lingua> => {
    const searchTerm = term.toLowerCase();
    return languages.filter((lingua: Lingua) =>
      lingua.name.toLowerCase().includes(searchTerm)
    );
  },
};
