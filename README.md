# 🗓️ Formateador de Fechas con JavaScript

Este proyecto muestra cómo trabajar con el objeto `Date` en JavaScript construyendo un formateador de fechas interactivo.

## 🛠️ ¿Qué se trabajó?

En este proyecto se implementaron las siguientes funcionalidades:

- **Obtención de la fecha actual:** Se utiliza el objeto `Date` para obtener el día, mes, año, hora y minutos actuales.
- **Formato de fecha inicial:** La fecha se muestra por defecto en el formato `día-mes-año`.
- **Selector de formatos:** Un menú desplegable (`<select>`) permite al usuario elegir entre diferentes formatos predefinidos.
- **Formateo dinámico:** Al seleccionar una opción, la fecha mostrada se actualiza instantáneamente al formato elegido:
  - `Año-Mes-Día`
  - `Mes-Día-Año Hora Minutos`
- **Manipulación de cadenas:** Se utilizan métodos de JavaScript para dividir, invertir y unir cadenas de texto para lograr los diferentes formatos.
- **Eventos del DOM:** Se escucha el evento `change` del selector para detectar la elección del usuario.
- **Actualización del DOM:** El contenido de un elemento `<p>` se modifica dinámicamente para mostrar la fecha en el formato seleccionado.

## 🚀 Cómo usar

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/josecervera20/date-formatter-js.git
    ```

2.  **Abre `index.html`** en tu navegador web favorito.

3.  Visualizarás la fecha actual.

4.  Selecciona un formato diferente del menú desplegable para ver la fecha actualizada.

## 📂 Estructura de archivos

```
.
├── index.html    # Estructura HTML principal
├── styles.css    # Estilos CSS
└── script.js     # Lógica JavaScript
```

## 🧑‍💻 Créditos

Este proyecto fue desarrollado como parte de la certificación de **Algoritmos y Estructuras de Datos de JavaScript** de [freeCodeCamp](https://www.freecodecamp.org/).

## 🤝 Contribuciones

¡Siéntete libre de contribuir mejorando el código, agregando más formatos o corrigiendo errores! Abre un issue o envía un pull request.

---

¡Disfruta experimentando con las fechas en JavaScript! ✨
