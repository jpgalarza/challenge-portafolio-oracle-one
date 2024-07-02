export const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

export const messages = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    tooShort: "El nombre no tiene la longitud necesaria",
    customError: "Ingrese un nombre válido. JS"
  },
  email: {
    valueMissing: "El campo email no puede estar vacío",
    typeMismatch: "Ingrese un email válido",
    tooShort: "El email no tiene la longitud necesaria",
    customError: "Ingrese un email válido. JS"
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacío.",
    tooShort: "El asunto no tiene la longitud necesaria",
    customError: "Ingresa una asunto válido. JS"
  },
};
