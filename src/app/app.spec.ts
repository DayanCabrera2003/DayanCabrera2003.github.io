import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';
import { I18nService } from './core/i18n/i18n.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    // Se fija el idioma antes de cada prueba para no depender del navegador que las ejecuta.
    localStorage.setItem('portfolio.lang', 'en');
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
  });

  it('pinta el titular en inglés', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const h1 = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(h1?.textContent).toContain('I build AI systems');
  });

  it('cambia todo el contenido al alternar el idioma', () => {
    const fixture = TestBed.createComponent(AppComponent);
    TestBed.inject(I18nService).toggle();
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Construyo sistemas de IA');
    expect(el.querySelector('#work .section__label')?.textContent).toContain('Trabajo seleccionado');
  });

  it('muestra los tres casos y la experiencia', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.case').length).toBe(3);
    expect(el.querySelectorAll('#experience .row').length).toBe(5);
  });
});
