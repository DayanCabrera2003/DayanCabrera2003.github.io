import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Lang, SiteContent } from '../content/content.types';

export const SITE_URL = 'https://dayancabrera2003.github.io';

/** URL absoluta de cada idioma, con barra final porque así la sirve GitHub Pages. */
export const LANG_URL: Record<Lang, string> = { en: `${SITE_URL}/`, es: `${SITE_URL}/es/` };

/**
 * Escribe en el <head> lo que depende del idioma: título, descripción, URL canónica
 * y etiquetas Open Graph. Al prerenderizar, esto queda fijo en el HTML de cada página.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  apply(lang: Lang, content: SiteContent): void {
    const { title, description, ogLocale } = content.seo;
    const url = LANG_URL[lang];

    this.doc.documentElement.lang = lang;
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:locale', content: ogLocale });
    this.meta.updateTag({ property: 'og:locale:alternate', content: ogLocale === 'en_US' ? 'es_ES' : 'en_US' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
