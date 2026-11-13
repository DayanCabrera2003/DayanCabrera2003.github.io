import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Lang, SiteContent } from '../content/content.types';
import { CONTENT_EN } from '../content/content.en';
import { CONTENT_ES } from '../content/content.es';

const STORAGE_KEY = 'portfolio.lang';

const CONTENT: Record<Lang, SiteContent> = { en: CONTENT_EN, es: CONTENT_ES };

/**
 * Idioma actual del sitio y el contenido que le corresponde.
 * Las secciones leen `content()`; al cambiar de idioma el signal se actualiza
 * y Angular vuelve a pintar sin recargar la página.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private platformId = inject(PLATFORM_ID);

  readonly lang = signal<Lang>(this.initialLang());
  readonly content = computed<SiteContent>(() => CONTENT[this.lang()]);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.lang = this.lang();
    }
  }

  /** Alterna entre inglés y español y guarda la preferencia del visitante. */
  toggle(): void {
    const next: Lang = this.lang() === 'en' ? 'es' : 'en';
    this.lang.set(next);
    if (!isPlatformBrowser(this.platformId)) return;
    document.documentElement.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // El almacenamiento puede estar bloqueado (modo privado); el cambio de idioma
      // sigue funcionando durante la visita, solo no se recuerda.
    }
  }

  /**
   * Idioma inicial: el que el visitante eligió antes; si no hay, el del navegador.
   * Se usa el navegador porque buena parte de las visitas vienen de España y Latinoamérica.
   */
  private initialLang(): Lang {
    if (!isPlatformBrowser(this.platformId)) return 'en';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'es') return stored;
    } catch {
      // Sin acceso al almacenamiento se decide por el idioma del navegador.
    }
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
  }
}
