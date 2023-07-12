const findLargestWord = (sentence) => {
   if (typeof sentence !== 'string') {
      throw new Error('Se esperaba una cadena de texto como argumento');
   }

   if (sentence === '') {
      return '';
   }

   let words = sentence.split(' ');
   let largestWord = '';

   words.forEach((word) => {
      if (word.length > largestWord.length) {
         largestWord = word;
      }
   });

   return largestWord;
};

module.exports = findLargestWord;

