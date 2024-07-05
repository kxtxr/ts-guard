/**
 * Checks if the provided value is an array.
 *
 * @param {any} t - The value to be checked.
 * @return {boolean} - Returns true if the value is an array, otherwise false.
 */
function isArray<T>(t: T[] | any): t is T[] {
  return Array.isArray(t);
}

export default isArray