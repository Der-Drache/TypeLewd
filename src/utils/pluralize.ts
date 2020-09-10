const pluralizableEnds = [
  { singular: 'y', plural: 'ies' },
  { singular: 'o', plural: 'oes' },
  { singular: 's', plural: 'ses' },
];
const pluralizableWords = [
  { singular: 'mouse', plural: 'mice' },
  { singular: 'goose', plural: 'geese' },
  { singular: 'foot', plural: 'feet' },
];

/**
 * pluralize the given word
 */
export const pluralize = (word: string) => {
  const pluralizableEnd = pluralizableEnds.find(pe => word.endsWith(pe.singular));

  if (pluralizableEnd) {
    const { plural, singular } = pluralizableEnd;
    return word.replace(new RegExp(plural + '$'), singular);
  }

  const pluralizableWord = pluralizableWords.find(pe => word === pe.singular);

  if (pluralizableWord) {
    return pluralizableWord.plural;
  }

  return word + 's';
}
