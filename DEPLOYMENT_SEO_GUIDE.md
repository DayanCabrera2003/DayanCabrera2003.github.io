# 📘 Guía de Despliegue y SEO - Portafolio Dayan Cabrera Corvo

## 🚀 Despliegue a GitHub Pages

### 1. Compilación de Producción

```bash
ng build --configuration=production --base-href="/"
```

**Importante:** Este comando aplica:
- ✅ Minificación de código
- ✅ Tree-shaking (eliminación de código no usado)
- ✅ Optimización de imágenes
- ✅ Compilación AOT (Ahead-of-Time)

### 2. Configuración del Repositorio

1. Ve a tu repositorio en GitHub: `https://github.com/DayanCabrera2003/DayanCabrera2003.github.io`
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona la rama donde publicarás (generalmente `gh-pages` o `main`)
4. Selecciona la carpeta `/docs` o `/root` (dependiendo de dónde coloques los archivos compilados)

### 3. Publicación Automática con GitHub Actions

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build -- --configuration=production --base-href="/"
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/portfolio/browser
```

---

## 🔍 Checklist SEO Post-Despliegue

### ✅ 1. Verificar URL en Producción
- [ ] URL accesible: `https://dayancabrera2003.github.io/`
- [ ] Todas las secciones cargan correctamente
- [ ] Imágenes se muestran (WebP)

### ✅ 2. Google Search Console

1. **Agregar propiedad:**
   - Ve a [Google Search Console](https://search.google.com/search-console/)
   - Agrega tu URL: `https://dayancabrera2003.github.io/`
   
2. **Verificación de propiedad:**
   - Usa el método de verificación por HTML tag
   - Agrega la meta tag en `index.html`:
     ```html
     <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
     ```

3. **Subir Sitemap:**
   - En Search Console → Sitemaps
   - Agrega: `https://dayancabrera2003.github.io/sitemap.xml`

4. **Solicitar indexación:**
   - En Search Console → Inspección de URL
   - Pega tu URL principal
   - Click en "Solicitar indexación"

### ✅ 3. Actualizar Enlaces en Plataformas

| Plataforma | Acción | Prioridad |
|-----------|--------|-----------|
| **GitHub Profile** | Agrega la URL en la sección "Website" de tu perfil | 🔴 Alta |
| **LinkedIn** | Edita tu perfil, sección "Información de contacto" → Website | 🔴 Alta |
| **CV (PDF)** | Asegúrate de que el PDF incluya la URL | 🔴 Alta |
| **Stack Overflow** | Actualiza tu perfil con el link | 🟡 Media |
| **Email Signature** | Incluye el link en tu firma de email | 🟢 Baja |

### ✅ 4. Validación Técnica

- [ ] **Viewport configurado:** `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] **Robots.txt accesible:** `https://dayancabrera2003.github.io/robots.txt`
- [ ] **Sitemap.xml accesible:** `https://dayancabrera2003.github.io/sitemap.xml`
- [ ] **Open Graph tags** presentes (para compartir en redes sociales)
- [ ] **Imágenes con atributos alt**
- [ ] **Loading lazy en imágenes** (excepto hero)

### ✅ 5. Pruebas de Rendimiento

#### Google PageSpeed Insights
1. Ve a [PageSpeed Insights](https://pagespeed.web.dev/)
2. Analiza: `https://dayancabrera2003.github.io/`
3. **Objetivo:** Score > 90 en Mobile y Desktop

#### Pruebas Responsive
- [ ] Mobile (375px): Chrome DevTools
- [ ] Tablet (768px): Chrome DevTools
- [ ] Desktop (1920px): Navegador normal

---

## 📊 Monitoreo Post-Lanzamiento

### Semana 1-2: Indexación
- Revisa Google Search Console diariamente
- Verifica que Google haya rastreado tu sitio
- Confirma que aparecen páginas indexadas

### Mes 1: Posicionamiento Inicial
**Palabras clave objetivo:**
- "Dayan Cabrera Corvo"
- "Programador cubano"
- "Desarrollador Angular Cuba"
- "Full-Stack Developer Havana"

**Cómo verificar:**
```
Google: "Dayan Cabrera Corvo"
Google: "Programador cubano Angular"
Google: site:dayancabrera2003.github.io
```

### Mes 2-3: Optimización
- Analiza qué keywords están funcionando (Search Console)
- Ajusta contenido si es necesario
- Genera backlinks naturales (comparte en redes, foros)

---

## 🎯 Palabras Clave Implementadas

### Primarias (Alta Prioridad)
- ✅ Dayan Cabrera Corvo
- ✅ Programador cubano
- ✅ Desarrollador de software cubano
- ✅ Full-Stack Developer

### Secundarias (Media Prioridad)
- ✅ Angular
- ✅ Python
- ✅ C#
- ✅ Rust
- ✅ Arquitectura de Software
- ✅ La Habana, Cuba

### Long-tail (Baja Prioridad, Alto ROI)
- ✅ "Estudiante Ciencias de la Computación Cuba"
- ✅ "Desarrollador Angular Python La Habana"
- ✅ "Programador Full-Stack Cuba"

---

## 🔗 Backlinks Estratégicos

### Inmediatos (Bajo tu control)
1. **GitHub Profile:** Agrega link en bio
2. **GitHub README.md:** Crea un perfil README con link al portafolio
3. **LinkedIn:** Sección "Featured" → Add link
4. **Repositories:** Agrega link en README de tus proyectos destacados

### A Mediano Plazo
1. **Dev.to:** Escribe un artículo sobre tu stack técnico, menciona tu portafolio
2. **Medium:** Publica un caso de estudio
3. **Hashnode:** Blog técnico con link al portafolio
4. **Foros (Stack Overflow, Reddit):** Firma con link al portafolio

---

## 📱 Verificación Mobile-First

Asegúrate de que en mobile se vea bien:

```bash
# Abre Chrome DevTools
# F12 → Toggle Device Toolbar
# Prueba en:
- iPhone SE (375x667)
- iPhone 12 Pro (390x844)
- Pixel 5 (393x851)
- Samsung Galaxy S20 (360x800)
```

---

## 🛠️ Comandos Útiles

```bash
# Desarrollo local
npm start
# o
ng serve

# Build de producción
npm run build -- --configuration=production --base-href="/"

# Análisis de bundle size
ng build --stats-json
npx webpack-bundle-analyzer dist/portfolio/browser/stats.json

# Verificar errores de TypeScript
ng build --configuration=production

# Linter
ng lint
```

---

## 📧 Contacto y Soporte

**Desarrollador:** Dayan Cabrera Corvo  
**Email:** dayancorvo@gmail.com  
**GitHub:** [@DayanCabrera2003](https://github.com/DayanCabrera2003)  
**Portfolio:** [https://dayancabrera2003.github.io/](https://dayancabrera2003.github.io/)

---

## 🏆 Resultados Esperados

### 1 mes después:
- ✅ Sitio indexado en Google
- ✅ Apareces en búsqueda de "Dayan Cabrera Corvo"
- ✅ 10-20 visitas orgánicas

### 3 meses después:
- ✅ Ranking en "Programador cubano Angular"
- ✅ 50-100 visitas mensuales
- ✅ Backlinks de GitHub, LinkedIn, foros

### 6 meses después:
- ✅ Top 10 en búsquedas locales (Cuba)
- ✅ 200+ visitas mensuales
- ✅ Autoridad de dominio consolidada

---

**¡Éxito con tu portafolio! 🚀**
