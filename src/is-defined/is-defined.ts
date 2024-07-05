/**
 * Checks if a value is defined.
 *
 * @param {T | undefined} t - The value to check.
 * @returns {boolean} - Returns true if the value is defined, false otherwise.
 */
function isDefined<T>(t: T | undefined): t is T {
  return t !== undefined
}

export { isDefined }
