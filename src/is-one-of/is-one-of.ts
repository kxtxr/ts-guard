/**
 * Checks if a given value is one of the values in a given array.
 *
 * @return {boolean} - True if the value is one of the values in the array, false otherwise.
 */
function isOneOf<T>(t: T, values: T[]): boolean {
  return values.includes(t)
}

export { isOneOf }
