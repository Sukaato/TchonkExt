import { runAdPreview } from '@/features/ad-preview/content';

export default defineContentScript({
  matches: ['*://*.twitch.tv/*'],
  main: runAdPreview,
});
