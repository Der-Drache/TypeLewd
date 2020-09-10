import { pluralize } from '.';

/**
 * pluralize if the count is greater than 1
 */
export const pluralizer = (word: string, count: number): string => {
  return count > 1
    ? pluralize(word)
    : word;
}
