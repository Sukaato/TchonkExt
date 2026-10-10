import { watchSettings } from '@/lib/settings';

const STYLE_ID = 'web-xp-no-premium';

/** Promo containers that exist only to sell Premium. */
const PROMO_SELECTORS = [
  'ytd-mealbar-promo-renderer',
  'yt-mealbar-promo-renderer',
  'ytd-statement-banner-renderer',
  'ytd-banner-promo-renderer',
  'ytd-background-promo-renderer',
  'ytmusic-mealbar-promo-renderer',
  'ytmusic-statement-banner-renderer',
  'ytmusic-popup-container ytmusic-upsell-dialog-renderer',
  'yt-upsell-dialog-renderer',
  'ytd-popup-container yt-upsell-dialog-renderer',
  '#premium-upsell-link',
];

const PREMIUM_RE = /\b(premium|music premium)\b/i;

function setStyle(on: boolean): void {
  document.getElementById(STYLE_ID)?.remove();
  if (!on) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `${PROMO_SELECTORS.join(',')}{display:none!important}`;
  document.documentElement.append(style);
}

function sweep(): void {
  for (const el of document.querySelectorAll<HTMLElement>('tp-yt-paper-dialog')) {
    if (!PREMIUM_RE.test(el.textContent ?? '')) continue;
    // Prefer the dialog's own dismiss action so the page state stays consistent.
    el.querySelector<HTMLElement>(
      '#dismiss-button, [aria-label="Fermer"], [aria-label="Close"]',
    )?.click();
    el.remove();
    for (const b of document.querySelectorAll('tp-yt-iron-overlay-backdrop')) b.remove();
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
}

export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  runAt: 'document_start',
  main() {
    let observer: MutationObserver | null = null;
    let pending = false;

    watchSettings((s) => {
      setStyle(s.noPremiumPopups);
      observer?.disconnect();
      observer = null;
      if (!s.noPremiumPopups) return;
      observer = new MutationObserver(() => {
        if (pending) return;
        pending = true;
        setTimeout(() => {
          pending = false;
          sweep();
        }, 200);
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    });
  },
});
