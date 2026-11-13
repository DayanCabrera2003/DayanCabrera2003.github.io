import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.html',
  styleUrls: ['./work.scss'],
})
export class WorkComponent {
  readonly i18n = inject(I18nService);
}
