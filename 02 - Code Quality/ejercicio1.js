/**
 * Calcula un resultado basado en la suma de los elementos del array y operaciones adicionales.
 * @param {number[]} arr - El array de números.
 * @returns {number} El resultado calculado.
 */
function calculateResult(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

/**
 * Realiza operaciones adicionales sobre el resultado en base al último elemento del array.
 * @param {number} result - El resultado calculado.
 * @param {number[]} arr - El array de números.
 * @returns {number} El resultado final.
 */
function performOperations(result, arr) {
  const lastElement = arr[arr.length - 1];

  if (lastElement % 2 === 0) {
    result *= arr.length;
  } else {
    result -= arr.length;
  }

  return result;
}

/**
 * Calcula un resultado complicado basado en un array de números.
 * @param {number[]} arr - El array de números.
 * @returns {number} El resultado complicado.
 */
function complicatedLevelOne(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("El argumento debe ser un array.");
  }

  if (arr.length === 0) {
    return 0;
  }

  let result = calculateResult(arr);
  result = performOperations(result, arr);

  return result;
}

console.log(complicatedLevelOne([3, 5, 2, 6, 3, 5]));


