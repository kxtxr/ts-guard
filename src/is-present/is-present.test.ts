import { isPresent } from './is-present'

describe('isPresent function', () => {
  it('should return true when value is present', () => {
    expect(isPresent(5)).toEqual(true)
    expect(isPresent('Hello')).toEqual(true)
    expect(isPresent(0)).toEqual(true)
    expect(isPresent(false)).toEqual(true)
  })

  it('should return false when value is not present', () => {
    expect(isPresent(undefined)).toEqual(false)
    expect(isPresent(null)).toEqual(false)
    expect(isPresent()).toEqual(false)
  })
})
