// Tipos del contenido del sitio. El contenido vive como datos tipados por idioma
// (content.en.ts, content.es.ts) en lugar de claves sueltas de traducción, porque
// las secciones son listas (casos, experiencia) y así cada idioma se edita como un
// documento completo, sin perder la correspondencia entre ambos.

export type Lang = 'en' | 'es';

export interface Link {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  meta: string;
  title: string;
  /** Dato principal del caso: lo que se pretende que el lector recuerde. */
  fact: string;
  factLabel: string;
  paragraphs: string[];
  stack: string;
}

export interface MinorWork {
  title: string;
  year: string;
  text: string;
}

export interface ExperienceRow {
  period: string;
  place: string;
  role: string;
}

export interface SiteContent {
  /** Título y descripción de la página para buscadores y redes sociales. */
  seo: { title: string; description: string; ogLocale: string };
  nav: { work: string; experience: string; contact: string; switchLang: string; skip: string };
  intro: {
    kicker: string;
    headline: string;
    lede: string;
    availability: string;
    photoAlt: string;
    cvLabel: string;
  };
  work: { title: string; cases: CaseStudy[]; alsoTitle: string; also: MinorWork[] };
  principles: { title: string; items: string[] };
  experience: {
    title: string;
    rows: ExperienceRow[];
    languagesTitle: string;
    languages: string;
  };
  contact: {
    title: string;
    text: string;
    location: string;
    links: Link[];
  };
}
