import { isNumberLike, isSafeInteger } from './is-number' // make sure to put the actual path to your file here

describe('Type guards', () => {
  describe('isNumberLike', () => {
    it('should return true for numbers', () => {
      expect(isNumberLike(42)).toBe(true)
    })

    it('should return true for number-like strings', () => {
      expect(isNumberLike('42')).toBe(true)
    })

    it('should return false for non-number strings', () => {
      expect(isNumberLike('not a number')).toBe(false)
    })

    it('should return false for other types', () => {
      expect(isNumberLike({})).toBe(false)
      expect(isNumberLike(true)).toBe(false)
      expect(isNumberLike(undefined)).toBe(false)
      expect(isNumberLike(null)).toBe(false)
    })
  })

  describe('isSafeInteger', () => {
    it('should return true for safe integers', () => {
      expect(isSafeInteger(42)).toBe(true)
    })

    it('should return false for non-integers', () => {
      expect(isSafeInteger(42.5)).toBe(false)
    })

    it('should return false for unsafe integers', () => {
      expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
    })

    it('should return false for non-numbers', () => {
      expect(isSafeInteger('42')).toBe(false)
      expect(isSafeInteger('not a number')).toBe(false)
      expect(isSafeInteger({})).toBe(false)
      expect(isSafeInteger(true)).toBe(false)
      expect(isSafeInteger(undefined)).toBe(false)
      expect(isSafeInteger(null)).toBe(false)
    })
  })
})
