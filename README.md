# Ganadería Colombia — sitio en Astro

Sitio del proyecto Ganadería Colombia: catálogo, calculadora de cumplimiento
(Resolución 219) y blog educativo. Genera HTML estático real por página
(bueno para SEO) y usa React solo donde hay interactividad real (la
calculadora), como isla independiente.

## Antes de publicar

1. **Número de WhatsApp**: está de ejemplo (`573001112233`) en dos archivos.
   Reemplázalo por el real:
   - `src/layouts/Layout.astro`
   - `src/components/CalculadoraDIN.tsx`

2. **Analítica** (Google Analytics + Meta Pixel): pega los snippets dentro
   del `<head>` de `src/layouts/Layout.astro`, justo donde dice el
   comentario `ANALYTICS Y PIXEL`.

3. **Logo real**: reemplaza el SVG de marcador de posición en
   `src/components/LogoMarca.astro` por el logo definitivo.

## Estructura

```
src/
  components/      → piezas visuales (Header, Hero, Catalogo, etc.)
  content/blog/     → artículos del blog en Markdown (así se agrega contenido)
  data/productos.ts → catálogo: agregar/editar productos aquí, no en el HTML
  layouts/         → plantilla base compartida
  pages/           → rutas del sitio (index, /blog, /blog/[articulo])
```

## Agregar un producto nuevo

Edita `src/data/productos.ts` y agrega un objeto al arreglo `PRODUCTOS`.
No hace falta tocar ningún componente.

## Agregar un artículo nuevo al blog

Crea un archivo `.md` en `src/content/blog/` con este formato:

```md
---
titulo: "Título del artículo"
resumen: "Una o dos frases para la vista previa."
fecha: 2026-08-01
categoria: "Regulación"
minutos: 7
---

Contenido en Markdown normal a partir de aquí.
```

Aparece automáticamente en `/blog` y en la sección "Aprender" del inicio,
ordenado por fecha.

## Comandos

| Comando           | Qué hace                                      |
| ------------------ | ---------------------------------------------- |
| `npm install`       | Instala dependencias                           |
| `npm run dev`        | Servidor local en `http://localhost:4321`      |
| `npm run build`      | Genera el sitio final en `dist/`               |
| `npm run preview`    | Sirve `dist/` localmente para probar el build  |

## Despliegue

Este repo se conecta a Cloudflare Pages por Git: cada `git push` a `main`
dispara un build y despliegue automático. Configuración de build en
Cloudflare Pages:

- **Comando de build**: `npm run build`
- **Directorio de salida**: `dist`
