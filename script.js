/**
 * @type {HTMLElement}
 * @description Párrafo HTML donde se mostrará la fecha actual formateada.
 */
const currentDateParagraph = document.getElementById("current-date");

/**
 * @type {HTMLSelectElement}
 * @description Elemento de selección (dropdown) que contiene las opciones de formato de fecha.
 */
const dateOptionsSelectElement = document.getElementById("date-options");

/**
 * @type {Date}
 * @description Objeto Date que representa la fecha y hora actual.
 */
const date = new Date();

/**
 * @type {number}
 * @description Día del mes actual (1-31).
 */
const day = date.getDate();

/**
 * @type {number}
 * @description Mes actual (0-11, se le suma 1 para representación común 1-12).
 */
const month = date.getMonth() + 1;

/**
 * @type {number}
 * @description Año actual (cuatro dígitos).
 */
const year = date.getFullYear();

/**
 * @type {number}
 * @description Hora actual (0-23).
 */
const hours = date.getHours();

/**
 * @type {number}
 * @description Minuto actual (0-59).
 */
const minutes = date.getMinutes();

/**
 * @type {string}
 * @description Formato de fecha por defecto: día-mes-año.
 */
const formattedDate = `${day}-${month}-${year}`;

/**
 * @description Establece el texto del párrafo con la fecha formateada por defecto al cargar la página.
 */
currentDateParagraph.textContent = formattedDate;

/**
 * @event change
 * @description Agrega un listener al evento 'change' del elemento de selección para actualizar el formato de la fecha mostrada.
 * @listens HTMLSelectElement#change
 */
dateOptionsSelectElement.addEventListener("change", () => {
  /**
   * @switch dateOptionsSelectElement.value
   * @description Evalúa el valor seleccionado en el dropdown para aplicar el formato de fecha correspondiente.
   */
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      /**
       * @description Invierte el orden de día, mes y año y los une con guiones.
       */
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      /**
       * @description Formatea la fecha incluyendo mes, día, año, horas y minutos.
       */
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    default:
      /**
       * @description Restablece el formato de fecha por defecto si no se selecciona otra opción.
       */
      currentDateParagraph.textContent = formattedDate;
  }
});
