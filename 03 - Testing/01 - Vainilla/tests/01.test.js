const esPalindromo = require('../Ejercicio 01');

describe('01 - JavaScript', () => {
   describe('esPalindromo', () => {
      test('Devuelve true si el string ingresado es un palíndromo', () => {
        expect(esPalindromo('Anita lava la tina')).toBe(true);
      });
    
      test('Devuelve false si el string ingresado no es un palíndromo', () => {
        expect(esPalindromo('Anita lava la tina.')).toBe(false);
      });
    
      test('Devuelve true si el string ingresado está vacío', () => {
        expect(esPalindromo('')).toBe(true);
      });
    
      test('Devuelve true si el string es palíndromo y está escrito en mayúsculas', () => {
        expect(esPalindromo('ANITA LAVA LA TINA')).toBe(true);
      });
    
      test('Devuelve un error si el valor ingresado no es de tipo string', () => {
        expect(() => esPalindromo(123)).toThrowError('Se esperaba una cadena de texto como argumento');
      });
    });
});
