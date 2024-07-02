export const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "tooLong",
  "customError"
];

export const messages = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    tooShort: "El nombre es demasiado corto",
    totooLong: "El nombre es demasiado largo",
    customError: "Nombre inválido. Max. 50 Caract."
  },
  email: {
    valueMissing: "El campo email no puede estar vacío",
    typeMismatch: "Ingrese un email válido",
    tooShort: "El email es demasiado corto",
    customError: "Ingrese un email válido. JS"
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacío",
    tooShort: "El asunto es demasiado corto",
    totooLong: "El asunto es demasiado largo",
    customError: "Asunto inválido. Entre 4 y 50 caract."
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío",
    tooShort: "El mensaje es demasiado corto",
    totooLong: "El mensaje es demasiado largo",
    customError: "Mensaje inválido. Entre 10 y 300 caract."
  },
};
