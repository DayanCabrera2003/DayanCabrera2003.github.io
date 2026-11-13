import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService, LANG_PATH } from '../../i18n/i18n.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './site-header.html',
  styleUrls: ['./site-header.scss'],
})
export class SiteHeaderComponent {
  readonly i18n = inject(I18nService);
  readonly langPath = LANG_PATH;
}
