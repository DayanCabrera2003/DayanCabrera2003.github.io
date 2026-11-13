import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.html',
  styleUrls: ['./site-header.scss'],
})
export class SiteHeaderComponent {
  readonly i18n = inject(I18nService);
}
