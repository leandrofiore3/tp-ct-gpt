//Esta función tiene como objetivo retornar un nuevo array con los elementos únicos del array de entrada
const getUniqueElements = (arr) => {
   let uniqueElements = [];

   arr.forEach((element) => {
      if (!uniqueElements.includes(element)) {
         uniqueElements.push(element);
      }
   });

   return uniqueElements;
};
const result = getUniqueElements([1, 2, 2, 3, 4, 4, 5]);
console.log(result); // [1, 2, 3, 4, 5]

module.exports = getUniqueElements;



