import { describe, expect, test } from 'vitest'
import { canReconfigure } from '../src/advent'

describe('Tests on canReconfigure', () => {
  const paramTest = 'TEST'

  test('should be a function', () => {
    expect(canReconfigure).toBeTypeOf('function')
  })

  test('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  test('should throw a message error if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow('First parameter must be provider')
  })

  test('should throw an error if first parameter is not a string', () => {
    expect(() => canReconfigure(33)).toThrow()
    expect(() => canReconfigure(17.89)).toThrow()
    expect(() => canReconfigure(true)).toThrow()
    expect(() => canReconfigure([1, 2, 3, 4])).toThrow()
    expect(() => canReconfigure({ a: 1, b: 2, c: 3 })).toThrow()
  })

  test('should throw an error message if first parameter is not a string', () => {
    expect(() => canReconfigure(33, paramTest)).toThrow(
      'First parameter must be a string'
    )
    expect(() => canReconfigure(17.89, paramTest)).toThrow(
      'First parameter must be a string'
    )
    expect(() => canReconfigure(true, paramTest)).toThrow(
      'First parameter must be a string'
    )
    expect(() => canReconfigure([1, 2, 3, 4], paramTest)).toThrow(
      'First parameter must be a string'
    )
    expect(() => canReconfigure({ a: 1, b: 2, c: 3 }, paramTest)).toThrow(
      'First parameter must be a string'
    )
  })

  test('should throw if second parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  test('should throw a message error if second parameter is missing', () => {
    expect(() => canReconfigure('TEST')).toThrow(
      'Second parameter must be provider'
    )
  })

  test('should throw an error if second parameter is not a string', () => {
    expect(() => canReconfigure(paramTest, 33)).toThrow()
    expect(() => canReconfigure(paramTest, 17.89)).toThrow()
    expect(() => canReconfigure(paramTest, true)).toThrow()
    expect(() => canReconfigure(paramTest, [1, 2, 3, 4])).toThrow()
    expect(() => canReconfigure(paramTest, { a: 1, b: 2, c: 3 })).toThrow()
  })

  test('should throw an error message if second parameter is not a string', () => {
    expect(() => canReconfigure(paramTest, 33)).toThrow(
      'Second parameter must be a string'
    )
    expect(() => canReconfigure(paramTest, 17.89)).toThrow(
      'Second parameter must be a string'
    )
    expect(() => canReconfigure(paramTest, true)).toThrow(
      'Second parameter must be a string'
    )
    expect(() => canReconfigure(paramTest, [1, 2, 3, 4])).toThrow(
      'Second parameter must be a string'
    )
    expect(() => canReconfigure(paramTest, { a: 1, b: 2, c: 3 })).toThrow(
      'Second parameter must be a string'
    )
  })

  test('should return a boolean', () => {
    expect(canReconfigure('ABC', 'CDE')).toBeTypeOf('boolean')
  })

  test('should return false if strings provided have different length', () => {
    expect(canReconfigure('ABC', 'DE')).toBe(false)
  })

  test('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  test('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('ABC', 'DDD')).toBeFalsy()
  })

  test('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
