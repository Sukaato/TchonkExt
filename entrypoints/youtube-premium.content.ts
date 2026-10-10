import { runNoPremiumPopups } from '@/features/youtube-no-premium/content';

export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  runAt: 'document_start',
  main: runNoPremiumPopups,
});
