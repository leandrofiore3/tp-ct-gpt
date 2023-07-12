function complicatedLevelOne(arr) {// eslint-disable-line no-unused-vars
   let result = 0;
   const arrLength = arr.length;
 
   for (let i = 0; i < arrLength; i++) {
     result += arr[i];
   }
 
   const lastElement = arr[arrLength - 1];
   
   if (lastElement % 2 === 0) {
     result *= arrLength;
   } else {
     result -= arrLength;
   }
 
   return result;
 }
 

console.log(complicatedLevelOne([3, 5, 2, 6, 3, 5])); 

