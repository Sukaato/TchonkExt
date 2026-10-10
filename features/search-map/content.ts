import { type Settings, watchSettings } from '@/lib/settings';

const CARD_ID = 'web-xp-map';

/** Queries that look like a place search (FR/EN), used in 'local' mode. */
const LOCAL_RE =
  /\b(près de|pres de|autour de|à proximité|near|nearby|around|restaurants?|resto|café|cafe|bar|boulangerie|pharmacie|hôtel|hotel|supermarché|magasin|garage|coiffeur|cinéma|cinema|hôpital|hopital|gare|station|parking|musée|musee|plage|rue|avenue|boulevard|place|adresse|itinéraire|horaires?)\b/i;

function mapUrl(query: string): string {
  const lang = document.documentElement.lang || navigator.language || 'fr';
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=${encodeURIComponent(lang)}&output=embed`;
}

function removeCard(): void {
  document.getElementById(CARD_ID)?.remove();
}

function buildCard(query: string): HTMLElement {
  const card = document.createElement('section');
  card.id = CARD_ID;
  card.style.cssText =
    'margin:0 0 16px;border:1px solid #dadce0;border-radius:12px;overflow:hidden;background:#fff;font:14px Arial,sans-serif;';

  const head = document.createElement('div');
  head.style.cssText =
    'display:flex;justify-content:space-between;align-items:center;padding:8px 12px;color:#202124;';
  const title = document.createElement('strong');
  title.textContent = 'Carte';
  const open = document.createElement('a');
  open.textContent = 'Ouvrir dans Google Maps';
  open.href = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
  open.style.cssText = 'color:#1a0dab;text-decoration:none;font-size:13px;';
  head.append(title, open);

  const frame = document.createElement('iframe');
  frame.src = mapUrl(query);
  frame.loading = 'lazy';
  frame.referrerPolicy = 'no-referrer-when-downgrade';
  frame.style.cssText = 'display:block;width:100%;height:320px;border:0;';

  card.append(head, frame);
  return card;
}

function render(s: Settings): void {
  removeCard();
  if (!s.searchMap) return;

  const query = new URLSearchParams(location.search).get('q')?.trim();
  if (!query) return;
  if (s.searchMapMode === 'local' && !LOCAL_RE.test(query)) return;

  // Right column when Google shows one, otherwise on top of the results.
  const host = document.querySelector('#rhs') ?? document.querySelector('#center_col');
  if (!host) return;
  host.prepend(buildCard(query));
}

export function runSearchMap(): void {
  watchSettings(render);
}
