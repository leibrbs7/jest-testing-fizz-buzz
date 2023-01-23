import { expect, test } from '@jest/globals'
import fizzbuzz from './fizzbuzz.js'

test('Only Positive Integer', () => {
  expect(() => fizzbuzz(-1)).toThrow('Must be a postive integer')
})

test('FizzBuzz if number divisible by 3 and 5', () => {
  expect(fizzbuzz(15)).toEqual('FizzBuzz')
  expect(fizzbuzz(30)).toEqual('FizzBuzz')
})

test('Fizz if number divisible by 3', () => {
  expect(fizzbuzz(9)).toBe('Fizz')
  expect(fizzbuzz(6)).toBe('Fizz')
})

test('Buzz if number divisible by 5', () => {
  expect(fizzbuzz(20)).toBe('Buzz')
  expect(fizzbuzz(40)).toBe('Buzz')
})

test('Return "" if number not divisible by 3 and 5', () => {
  expect(fizzbuzz(23).toEqual(''))
  expect(fizzbuzz(17).toEqual(''))
})
