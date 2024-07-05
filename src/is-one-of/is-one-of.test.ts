import { isOneOf } from './is-one-of'

describe('index function', () => {
  it('should return true when value is in the array', () => {
    expect(isOneOf(2, [1, 2, 3])).toEqual(true)
    expect(isOneOf('b', ['a', 'b', 'c'])).toEqual(true)
  })

  it('should return false when value is not in the array', () => {
    expect(isOneOf(4, [1, 2, 3])).toEqual(false)
    expect(isOneOf('d', ['a', 'b', 'c'])).toEqual(false)
  })

  it('should return false when checking presence in an empty array', () => {
    expect(isOneOf(1, [])).toEqual(false)
    expect(isOneOf('a', [])).toEqual(false)
  })
})
