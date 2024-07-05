function isNumber(value: any): value is number {
  return typeof value === 'number'
}

function isNumberLike(value: any): value is number {
  return isNumber(value) || !isNaN(parseFloat(value))
}

function isSafeInteger(value: any): value is number {
  return Number.isSafeInteger(value)
}

export { isNumber, isNumberLike, isSafeInteger }
