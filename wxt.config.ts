import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
    name: 'TchonkExt',
    description:
      'Streams Twitch HLS, preview à la place des pubs, YouTube sans popups Premium, carte dans les recherches Google.',
    // usher.ttvnw.net = master playlist ; *.ttvnw.net = playlists de qualité + segments
    // (nécessaire pour l'observation webRequest et la règle Referer du lecteur).
    permissions: [
      'webRequest',
      'tabs',
      'storage',
      'declarativeNetRequestWithHostAccess',
      'scripting',
    ],
    host_permissions: ['*://*.twitch.tv/*', '*://*.ttvnw.net/*'],
    action: {
      default_title: 'TchonkExt',
    },
  },
});
