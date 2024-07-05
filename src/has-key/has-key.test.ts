import { hasKey } from './has-key'

describe('hasKey function', () => {
  it('should return true when object has the specific key', () => {
    const obj1 = { key1: 'value1', key2: 'value2' }
    const obj2 = { ['key3']: 'value3' }
    expect(hasKey(obj1, 'key1')).toEqual(true)
    expect(hasKey(obj2, 'key3')).toEqual(true)
  })

  it('should return false when object does not have the specific key', () => {
    const obj: Record<string, any> = { key4: 'value4' }
    expect(hasKey(obj, 'key5')).toEqual(false)
  })

  it('should return false if the first argument is not an object', () => {
    const x: any = null
    expect(hasKey(x, 'key')).toEqual(false)

    const y: any = undefined
    expect(hasKey(y, 'key')).toEqual(false)
  })
})
