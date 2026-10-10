import { DEFAULTS, patchSettings, type Settings, watchSettings } from '@/lib/settings';
import { ref } from 'vue';

/** Reactive view of the extension settings, kept in sync with storage. */
export function useSettings() {
  const settings = ref<Settings>({ ...DEFAULTS });
  const ready = ref(false);

  watchSettings((s) => {
    settings.value = s;
    ready.value = true;
  });

  function update(patch: Partial<Settings>): void {
    settings.value = { ...settings.value, ...patch };
    void patchSettings(patch);
  }

  return { settings, ready, update };
}
