import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Lang } from '../../core/content/content.types';
import { I18nService, LANG_PATH } from '../../core/i18n/i18n.service';
import { SeoService } from '../../core/seo/seo.service';
import { SiteHeaderComponent } from '../../core/components/site-header/site-header';
import { IntroComponent } from '../../sections/intro/intro';
import { WorkComponent } from '../../sections/work/work';
import { PrinciplesComponent } from '../../sections/principles/principles';
import { ExperienceComponent } from '../../sections/experience/experience';
import { ContactComponent } from '../../sections/contact/contact';

/** Página única del sitio; el idioma llega en los datos de la ruta (/ o /es). */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    SiteHeaderComponent,
    IntroComponent,
    WorkComponent,
    PrinciplesComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
  readonly i18n = inject(I18nService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(SeoService);

  ngOnInit(): void {
    const lang = (this.route.snapshot.data['lang'] as Lang) ?? 'en';
    this.i18n.setLang(lang);
    this.seo.apply(lang, this.i18n.content());

    // Solo desde la portada en inglés: si el visitante prefiere español, se le lleva a /es.
    // No se redirige al revés para no impedir que alguien comparta o abra la versión inglesa.
    if (lang === 'en' && this.i18n.preferredLang() === 'es') {
      void this.router.navigateByUrl(LANG_PATH.es);
    }
  }
}
