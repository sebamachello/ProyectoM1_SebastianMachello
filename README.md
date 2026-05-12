# ColorFly Generator 🎨

## 📌 Descripción

ColorFly Generator es una aplicación web interactiva que permite generar paletas de colores aleatorias en distintos formatos.

La aplicación fue desarrollada como proyecto del Módulo 1 de Soy Henry utilizando HTML, CSS y JavaScript.

---

# 👤 Manual de usuario

## Cómo usar la aplicación

1. Seleccionar la cantidad de colores:
   - 6 colores
   - 8 colores
   - 9 colores

2. Seleccionar el formato de color:
   - HEX
   - HSL

3. Presionar el botón:
   - “Generar paleta”

4. La aplicación generará automáticamente una nueva paleta de colores aleatorios mostrando el código correspondiente en cada bloque.

5. Se mostrará un microfeedback visual indicando que la paleta fue generada correctamente.

---

# ⚙️ Manual técnico

## Decisiones técnicas implementadas

### HTML
- Uso de etiquetas semánticas como:
  - `header`
  - `main`
  - `button`
  - `label`

### CSS
- Uso de Flexbox para estructurar el layout de la paleta.
- Diseño responsive orientado a desktop.
- Estilos separados en un archivo CSS externo.
- Implementación de hover y transiciones para mejorar la experiencia visual.

### JavaScript
- Manipulación dinámica del DOM.
- Generación aleatoria de colores HEX y HSL.
- Render dinámico según la cantidad de colores seleccionada.
- Eventos mediante `addEventListener`.
- Creación dinámica de elementos utilizando:
  - `createElement`
  - `appendChild`

### Accesibilidad
- Labels asociados a los selectores.
- Contraste suficiente entre texto y fondo.
- Focus visible en controles interactivos.

---

# 💻 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

---

# ▶️ Instalación y ejecución local

## Clonar repositorio

```bash
1. git clone LINK_DEL_REPOSITORIO

2. Ingresar a la carpeta del proyecto

cd ProyectoM1_SebastianMachello

3. Abrir el proyecto
- abrir el archivo
  index.html
  
- en cualquier navegador web.  

🌐 Deploy en GitHub Pages
Pasos para desplegar la aplicación
Subir el proyecto al repositorio de GitHub.

Ingresar al repositorio.

Ir a:

Settings

Pages

En la sección “Build and deployment”:

seleccionar Deploy from a branch

En “Branch” seleccionar:

main

/root

Presionar “Save”.

GitHub generará automáticamente un link público para acceder a la aplicación.🤖 Uso de Inteligencia Artificial
Se utilizó inteligencia artificial como apoyo durante el desarrollo del proyecto para:

explicación de conceptos

debugging

resolución de errores

generación de ideas de UI

comprensión de JavaScript y manipulación del DOM

documentación técnica

Los prompts utilizados y sus resultados se encuentran documentados en la carpeta correspondiente.

👨‍💻 Autor
Sebastian Machello

