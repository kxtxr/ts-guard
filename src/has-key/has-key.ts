/**
 * Checks if the given object has a specified key.
 *
 * @param {object} x - The object to check.
 * @param {string | symbol} key - The key to check for.
 * @returns {boolean} - Returns true if the key exists in the object, false otherwise.
 */
function hasKey<T extends object, K extends keyof T>(x: T, key: K): x is T & Required<Pick<T, K>> {
  return typeof x === 'object' && x !== null && key in x
}

export { hasKey }
