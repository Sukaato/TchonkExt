import { forceStreamOnPage } from '@/features/hls-catcher/force';

export default defineContentScript({
  matches: ['*://*.twitch.tv/*'],
  registration: 'runtime',
  main: forceStreamOnPage,
});
