# 🦁 ZOOBLOG — Astro Multilingual Animal Blog

ZOOBLOG es un proyecto desarrollado con Astro, Tailwind CSS, GSAP y Lenis para aprender arquitectura frontend moderna, internacionalización (i18n), animaciones y generación de contenido dinámico mediante Markdown.

El proyecto funciona como un blog editorial sobre animales, biodiversidad y conservación de especies.

---

# 🚀 Tecnologías utilizadas

- Astro
- Tailwind CSS
- JavaScript
- GSAP
- Lenis
- Astro Content Collections
- Markdown
- i18n (Español / Inglés)

---

# 🌎 Características principales

## ✅ Internacionalización (i18n)

El proyecto soporta múltiples idiomas:

```txt
/es
/en

Con rutas dinámicas:

/es/blog
/en/blog

Y artículos independientes por idioma.


Los artículos se crean usando Markdown:

src/content/blog/

Ejemplo:

src/content/blog/es/perros.md
src/content/blog/en/dogs.md

Cada artículo incluye:

title
description
pubDate
author
tags
image
imageAlt
lang
translationKey
draft
✅ Content Collections

Astro valida automáticamente la estructura de los artículos mediante:

src/content.config.ts
✅ Búsqueda de artículos

El blog incluye:

buscador dinámico
filtrado en tiempo real
categorías
sidebar
featured post
✅ Animaciones modernas

El proyecto utiliza:

GSAP

Para:

animaciones de entrada
reveals
efectos visuales
scroll animations
Lenis

Para:

smooth scrolling
navegación fluida
✅ Diseño responsive

El sitio está optimizado para:

desktop
tablet
móvil

Usando:

CSS Grid
Flexbox
Tailwind Utilities
📁 Estructura del proyecto
src/
│
├── components/
├── content/
│   └── blog/
│       ├── es/
│       └── en/
│
├── i18n/
├── layouts/
├── pages/
│   └── [lang]/
│
├── scripts/
├── styles/
│
└── content.config.ts
🖼️ Imágenes por idioma

Las imágenes se organizan por idioma:

public/images/es/
public/images/en/

Esto permite:

imágenes distintas por idioma
mejor SEO internacional
mejor organización editorial
⚡ Instalación
1. Clonar proyecto
git clone https://github.com/TU-USUARIO/zooblog-astro.git
2. Entrar al proyecto
cd zooblog-astro
3. Instalar dependencias
npm install
4. Ejecutar entorno local
npm run dev
🏗️ Build de producción
npm run build
🧠 Objetivos de aprendizaje

Este proyecto fue desarrollado para aprender:

Astro Routing
Dynamic Routes
Tailwind CSS
GSAP
Lenis
Markdown CMS
Content Collections
Internacionalización
Arquitectura frontend moderna
SEO técnico
Accesibilidad web
📚 Próximas mejoras
ScrollTrigger avanzado
Astro Assets
MDX
Sistema de categorías dinámicas
CMS Headless
View Transitions
Dark Mode
Paginación
Related Posts
Comentarios
Optimización avanzada de imágenes
👨‍💻 Autor

Desarrollado por Chelo.
