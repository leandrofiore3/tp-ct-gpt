// Este regex debe validar que el teléfono tenga:
// - Luego, dos dígitos numéricos.
// - A continuación, un guión (-).
// - Después, exactamente diez dígitos numéricos.
// - Finalmente, la cadena debe terminar con un número.

function validatePhone() {
   let tuRegex = /^\+\d{2}-\d{10}$/;
   return tuRegex;
 }

module.exports = validatePhone;
