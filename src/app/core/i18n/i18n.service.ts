import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Lang, SiteContent } from '../content/content.types';
import { CONTENT_EN } from '../content/content.en';
import { CONTENT_ES } from '../content/content.es';

const STORAGE_KEY = 'portfolio.lang';

const CONTENT: Record<Lang, SiteContent> = { en: CONTENT_EN, es: CONTENT_ES };

/** Ruta de cada idioma. Cada uno tiene su propia URL para que los buscadores indexen ambos. */
export const LANG_PATH: Record<Lang, string> = { en: '/', es: '/es' };

/**
 * Idioma actual y su contenido. El idioma lo decide la URL (/ o /es), no el navegador:
 * así cada página prerenderizada sale completa en su idioma y es lo que ve Google.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private platformId = inject(PLATFORM_ID);

  readonly lang = signal<Lang>('en');
  readonly content = computed<SiteContent>(() => CONTENT[this.lang()]);
  readonly otherLang = computed<Lang>(() => (this.lang() === 'en' ? 'es' : 'en'));

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  /** Guarda la elección explícita del visitante para no volver a redirigirle por idioma. */
  remember(lang: Lang): void {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Con el almacenamiento bloqueado la elección vale solo para esta visita.
    }
  }

  /**
   * Idioma preferido del visitante: el que eligió antes o, si no eligió, el de su navegador.
   * Devuelve null fuera del navegador (al prerenderizar no hay visitante).
   */
  preferredLang(): Lang | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'es') return stored;
    } catch {
      // Sin almacenamiento se decide por el idioma del navegador.
    }
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
  }
}
