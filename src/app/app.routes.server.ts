import { RenderMode, ServerRoute } from '@angular/ssr';

// Todo se prerenderiza al compilar: GitHub Pages solo sirve archivos estáticos,
// y así cada idioma llega a los buscadores como HTML completo.
export const serverRoutes: ServerRoute[] = [{ path: '**', renderMode: RenderMode.Prerender }];
