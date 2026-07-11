# 🎵 Festival de Música (Blues, Techno & EDM) — Landing Page Profesional

¡Bienvenido al repositorio de **Festival de Música**! Este es un proyecto de desarrollo frontend diseñado como una landing page altamente interactiva, responsiva y optimizada para el rendimiento web. Sirve como una demostración práctica de flujos de trabajo modernos de automatización, preprocesamiento de estilos y optimización de recursos multimedia para la web actual.

---

## 🚀 Características Clave del Proyecto

*   **Video de Fondo en Alta Definición:** Cabecera con video fluido en bucle (`<video>` HTML5) con un filtro de contraste adaptativo (*overlay*) para asegurar la legibilidad del texto en cualquier resolución.
*   **Galería Dinámica con Lightbox (Modal):** Implementación de una galería interactiva en JavaScript nativo. Al hacer clic en las miniaturas, se crea dinámicamente un visor de pantalla completa con transiciones fluidas de desvanecimiento (`fade-out`).
*   **Navegación Fija e Inteligente (Sticky Header & Active Link):**
    *   La cabecera se vuelve fija de manera fluida al hacer scroll y sobrepasar la sección introductoria.
    *   Detector de posición en tiempo real que resalta automáticamente el enlace del menú correspondiente a la sección que está leyendo el usuario en pantalla.
    *   Transición fluida de scroll al hacer clic en los enlaces de navegación.
*   **Diseño 100% Responsivo:** Interfaz adaptada a dispositivos móviles, tablets y escritorios mediante layouts modernos construidos en CSS Flexbox y Grid, utilizando tipografía fluida (`clamp`).
*   **Sección de Venta de Boletos:** Tarjetas informativas de precios estilizadas de manera premium con listado de beneficios y precios adaptados.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

### Frontend Core:
*   **HTML5 Semántico:** Estructura limpia y enfocada en accesibilidad (SEO friendly).
*   **CSS3 & SASS (SCSS):** Uso del preprocesador SASS utilizando una arquitectura modular de archivos (separando variables, mixins, componentes globales y vistas específicas).
*   **JavaScript Nativo (Vanilla JS - ES6):** Toda la lógica e interactividad web fue programada sin dependencias ni frameworks externos para garantizar la máxima velocidad de ejecución.

### Automatización y Optimización (Build Tools):
*   **Node.js & npm:** Gestión del entorno del proyecto.
*   **Gulp.js:** Motor de automatización de tareas encargado de:
    *   Compilación de archivos Sass (`gulp-sass`).
    *   Minificación y optimización de archivos JavaScript (`gulp-terser`).
    *   Generación automática de imágenes responsivas en formatos de última generación (`.webp` y `.avif`) a partir de imágenes tradicionales (`.jpg`, `.png`) utilizando la biblioteca de alto rendimiento `sharp`.
    *   Monitoreo en tiempo real (*watching*) para desarrollo ágil.

---

## 📈 Enfoque en Rendimiento Web y Optimización

Este proyecto fue construido aplicando buenas prácticas de **Web Performance Optimization (WPO)**:
1.  **Formatos de Imagen de Nueva Generación:** Implementación de etiquetas `<picture>` para servir formatos altamente comprimidos y eficientes (`.avif` y `.webp`) con fallback a `.jpg` tradicional para navegadores antiguos.
2.  **Carga Diferida (Lazy Loading):** Atributo `loading="lazy"` en todas las imágenes fuera del primer pantallazo para reducir el tiempo inicial de carga y ahorrar ancho de banda.
3.  **Minificación de Código:** Minificación del código de producción CSS y JS para reducir el tamaño de transferencia de los recursos.

---

## 📁 Estructura del Proyecto

```bash
├── build/               # Archivos de distribución optimizados (compilados y procesados)
│   ├── css/             # Estilos de producción (app.css y map de depuración)
│   ├── js/              # JavaScript de producción minificado
│   └── img/             # Imágenes optimizadas en formatos webp, avif y jpg (e imágenes thumb)
├── src/                 # Código fuente de desarrollo
│   └── img/             # Imágenes originales de alta resolución
├── video/               # Videos del sitio en formatos mp4, webm y ogg
├── index.html           # Documento principal del sitio web
├── package.json         # Dependencias y scripts de ejecución npm
└── README.md            # Documentación del proyecto
```

---

## 💻 Instalación y Ejecución Local

Para instalar las dependencias y ejecutar el entorno de desarrollo local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Socrates94/ProyectoFestivalMusica.git
    cd Festival-de-Blues
    ```

2.  **Instalar dependencias de Node.js:**
    ```bash
    npm install
    ```

3.  **Compilar y ver cambios en tiempo real:**
    *   Para compilar SASS continuamente:
        ```bash
        npm run sass
        ```
    *   Para ejecutar las tareas de automatización con Gulp (compilación, optimización de recursos y monitoreo):
        ```bash
        npm run dev
        ```

---

## 👤 Autor

Desarrollado con dedicación por **Daniel Flores** — Desarrollador Frontend.

*   **GitHub:** [@Socrates94](https://github.com/Socrates94)
*   **Correo de contacto:** daniel_f94@outlook.com

---
*Este proyecto forma parte de mi portafolio profesional de desarrollo web, demostrando habilidades avanzadas en el manejo de estilos avanzados, automatización de tareas y performance optimizado.*
