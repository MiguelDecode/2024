import { describe, expect, it as test } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  /*   it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  }); */

  test('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  test('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })

  test('should throw a specific error message if not number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })

  test('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  test('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  test("should return 'fizz' if number provided is 3", () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  test("should return 'fizz' if number provided is multiple of 3", () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  test("should return 'woff' if number provided is multiple of 7", () => {
    expect(fizzbuzz(7)).toBe('woff')
  })

  test('should return "buzz" if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  test('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  test('should return "fizzbuzz" if number is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })

  test("should return 'fizzwoff' if number provided is 21", () => {
    expect(fizzbuzz(21)).toBe('fizzwoff')
  })
})
