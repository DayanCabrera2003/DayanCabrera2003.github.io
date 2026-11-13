import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss'],
})
export class IntroComponent {
  readonly i18n = inject(I18nService);

  /** El CV que se ofrece arriba coincide con el idioma en que se está leyendo el sitio. */
  cvHref(): string {
    return this.i18n.lang() === 'es'
      ? 'assets/Dayan_Cabrera_Corvo_CV_ES.pdf'
      : 'assets/Dayan_Cabrera_Corvo_CV.pdf';
  }
}
