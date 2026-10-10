import { getSettings } from '@/lib/settings';

/**
 * Chrome (134+) enters Picture-in-Picture automatically when the tab goes to the
 * background, provided the page registers an `enterpictureinpicture` media session
 * action while media is playing. A plain `visibilitychange` handler can't do this:
 * requestPictureInPicture() needs a user gesture.
 */
function setAutoPip(v: HTMLVideoElement | null): void {
  if (!('mediaSession' in navigator)) return;
  try {
    navigator.mediaSession.setActionHandler(
      'enterpictureinpicture' as MediaSessionAction,
      v
        ? () => {
            if (document.pictureInPictureElement !== v) {
              void v.requestPictureInPicture().catch(() => {});
            }
          }
        : null,
    );
  } catch {
    /* action not supported by this browser version */
  }
}

/** Enable auto PiP for this video, if the feature is turned on. */
export async function registerAutoPip(v: HTMLVideoElement): Promise<void> {
  if ((await getSettings()).autoPip) setAutoPip(v);
}

export function unregisterAutoPip(): void {
  setAutoPip(null);
}
