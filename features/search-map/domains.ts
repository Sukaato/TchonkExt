// Google's TLD can't be wildcarded in a match pattern, so list the usual ones.
const TLDS = [
  'com',
  'fr',
  'de',
  'es',
  'it',
  'nl',
  'be',
  'ch',
  'at',
  'pt',
  'ie',
  'co.uk',
  'pl',
  'se',
  'dk',
  'fi',
  'no',
  'cz',
  'gr',
  'ro',
  'hu',
  'lu',
];

export const GOOGLE_SEARCH_MATCHES = TLDS.map((t) => `*://www.google.${t}/search*`);
