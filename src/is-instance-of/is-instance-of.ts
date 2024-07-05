/**
 * Checks if an object is an instance of a specific type.
 *
 * @param {unknown} t - The object to be checked.
 * @param {Function} instanceType - The type to be checked against.
 * @return {boolean} - Returns true if the object is an instance of the specified type, otherwise false.
 */
function isInstanceof<T>(t: unknown, instanceType: new (...args: any[]) => T): t is T {
  return t instanceof instanceType
}

export { isInstanceof }
