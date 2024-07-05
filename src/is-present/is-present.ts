/**
 * Checks if a value is present, i.e., not undefined or null.
 *
 * @param {*} t - The value to check.
 * @return {boolean} - True if the value is present, otherwise false.
 */
function isPresent<T>(t: T | undefined | null | void): t is T {
  return t !== undefined && t !== null
}

export { isPresent }
