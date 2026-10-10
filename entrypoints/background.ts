import { setupHlsCatcher } from '@/features/hls-catcher/background';

export default defineBackground(() => {
  setupHlsCatcher();
});
