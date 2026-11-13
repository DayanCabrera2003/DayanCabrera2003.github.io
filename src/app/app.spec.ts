import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
import { routes } from './app.routes';

describe('Portafolio', () => {
  beforeEach(() => {
    // Se fija la preferencia en inglés para que la portada no redirija según el navegador de pruebas.
    localStorage.setItem('portfolio.lang', 'en');
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it('pinta la portada en inglés con el nombre en el h1', async () => {
    const harness = await RouterTestingHarness.create('/');
    const el = harness.routeNativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Dayan Cabrera Corvo');
    expect(el.querySelector('.intro__headline')?.textContent).toContain('I build AI systems');
    expect(TestBed.inject(Title).getTitle()).toContain('AI & Full-Stack Engineer');
  });

  it('sirve la versión en español en /es con su propio título y canónica', async () => {
    const harness = await RouterTestingHarness.create('/es');
    const el = harness.routeNativeElement as HTMLElement;
    expect(el.querySelector('.intro__headline')?.textContent).toContain('Construyo sistemas de IA');
    expect(el.querySelector('#work .section__label')?.textContent).toContain('Trabajo seleccionado');
    expect(TestBed.inject(Title).getTitle()).toContain('Ingeniero de IA');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://dayancabrera2003.github.io/es/',
    );
  });

  it('muestra los tres casos y la experiencia', async () => {
    const harness = await RouterTestingHarness.create('/');
    const el = harness.routeNativeElement as HTMLElement;
    expect(el.querySelectorAll('.case').length).toBe(3);
    expect(el.querySelectorAll('#experience .row').length).toBe(5);
  });
});
