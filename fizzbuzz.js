export default function fizzbuzz(number) {
  let value = ''

  if (number > 0) {
    value += number % 3 === 0 ? 'Fizz' : ''
    value += number % 5 === 0 ? 'Buzz' : ''
  } else {
    throw new Error('Must be a postive integer')
  }

  return value
}
