import { runSearchMap } from '@/features/search-map/content';
import { GOOGLE_SEARCH_MATCHES } from '@/features/search-map/domains';

export default defineContentScript({
  matches: GOOGLE_SEARCH_MATCHES,
  main: runSearchMap,
});
