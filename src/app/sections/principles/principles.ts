import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-principles',
  standalone: true,
  templateUrl: './principles.html',
  styleUrls: ['./principles.scss'],
})
export class PrinciplesComponent {
  readonly i18n = inject(I18nService);
}
