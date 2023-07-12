/**
 * Realiza cálculos complicados basados en un array de números y devuelve un resultado final.
 * @param {number[]} array - El array de números.
 * @returns {string|number} El resultado final o un mensaje indicando el resultado.
 */
function complicatedLevelTwo(array) {
   const result = array
     .map((x) => x * 2)
     .filter((x) => x % 3 === 0)
     .reduce((acc, curr) => acc + curr, 0);
 
   if (result > 1000) {
     let temp = result;
     for (let i = 0; i < 10; i++) {
       temp -= i;
       temp *= 2;
     }
     return temp;
   } else {
     let count = 0;
     while (count < 3) {
       result += count;
       count++;
     }
     return `The final result is: ${result}`;
   }
 }
 
 const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log(complicatedLevelTwo(array));
 
