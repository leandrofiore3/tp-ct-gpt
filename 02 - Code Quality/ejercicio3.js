/**
 * Realiza cálculos complicados basados en un objeto y devuelve un resultado final formateado.
 * @param {Object} obj - El objeto con pares clave-valor.
 * @returns {string} El resultado final formateado.
 */
function complicatedLevelThree(obj) {
   const keys = Object.keys(obj);
   const values = Object.values(obj);
   const sum = values.reduce((acc, curr) => acc + curr, 0);
 
   const results = [];
 
   for (let i = 0; i < keys.length; i++) {
     const key = keys[i];
     const value = values[i];
 
     if (value % 2 === 0) {
       results.push(`${key} is even.`);
     } else {
       let temp = value;
       while (temp > 0) {
         results.push(key);
         temp--;
       }
     }
   }
 
   const finalResult = [];
 
   let count = 0;
   while (count < sum) {
     finalResult.push(...results);
     count++;
   }
 
   const formattedResult = finalResult.join(', ').toUpperCase();
 
   return formattedResult;
 }
 
 const obj = {
   a: 2,
   b: 3,
   c: 4,
   d: 5,
 };
 
 console.log(complicatedLevelThree(obj));
 
