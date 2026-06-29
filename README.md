# Java Template

Plantilla HTML/CSS/JavaScript vanilla para una landing premium de inversion, expansion, sucursales y comunidad. No usa frameworks ni dependencias externas.

## Como abrirla

Abre `index.html` directamente en tu navegador o desde Visual Studio Code con Live Server. No necesitas instalar nada.

## Estructura

```txt
java-template/
  index.html
  README.md
  css/
    styles.css
  js/
    data.js
    main.js
  assets/
    images/
    videos/
    icons/
```

## Donde editar contenido

Todo el contenido editable vive en `js/data.js`.

Edita estos objetos:

- `siteConfig`: marca, logo, idioma, links de app y CTA principal.
- `navData`: links del header y menu mobile.
- `heroData`: hero, dashboard live, metricas y CTAs.
- `bonusData`: promocion temporal.
- `investorsData`: carrusel de socios.
- `metricsData`: prueba social, actividad reciente, metricas y timeline.
- `locationsData`: proxima sucursal y nueva sucursal operando.
- `visionData`: vision, fases y fundador.
- `benefitsData`: beneficios.
- `calculatorData`: monto minimo, maximo, precio por unidad y ROI.
- `decisionData`: comparacion educativa.
- `dataRoomData`: indicadores, evidencia y galeria.
- `scarcityData`: franja de escasez.
- `modelData`: modelo de inversion.
- `branchesData`: video vertical, sucursales, estados y Google Maps.
- `participationData`: modelo de participacion privada.
- `faqData`: preguntas, respuestas y tarjetas de mas informacion.
- `blogData`: articulos.
- `ctaData`: CTA final.
- `founderMessageData`: mensaje del fundador.
- `footerData`: footer, contacto y redes.
- `legalData`: disclaimer y textos legales.

## Donde poner assets

Coloca tus imagenes en:

```txt
assets/images/
```

Coloca tus videos en:

```txt
assets/videos/
```

Ejemplos de rutas ya preparadas en `data.js`:

```js
logo: "assets/images/logo.png"
src: "assets/videos/branch-video.webm"
image: "assets/images/blog-1.jpg"
```

Si un archivo no existe todavia, la plantilla muestra un placeholder visual con gradiente para evitar que la pagina se rompa.

## Cambiar colores

Edita las variables en `css/styles.css`:

```css
:root {
  --color-red: #dd2343;
  --color-red-2: #f04463;
  --color-orange: #f97316;
  --color-black: #080808;
}
```

## Interacciones incluidas

- Header sticky.
- Scroll suave por anclas.
- Menu hamburguesa mobile.
- CTA fijo inferior en mobile.
- Reveal on scroll.
- Carrusel con dots.
- FAQ acordeon.
- Calculadora con slider.
- Cards con hover.
- Video vertical autoplay muted loop con fallback.
- Estados de sucursal abierta/proxima.
- Links externos a Google Maps.
- Footer renderizado desde datos.

## Nota legal

Los textos son demostrativos. Antes de publicar una landing real de inversion, revisa estructura legal, terminos, riesgos, promesas de rendimiento, avisos fiscales y documentos comerciales con asesoria profesional.
