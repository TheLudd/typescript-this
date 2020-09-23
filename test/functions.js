import { assert } from 'chai'
import {
  add,
  filter,
  isEven,
  map,
} from '../lib/functions'

const { deepEqual } = assert

describe('functions', () => {
  const numbers = [ 1, 2, 3, 4, 5 ]
  const inc = add(1)

  describe('map', () => {
    const expected = [ 2, 3, 4, 5, 6 ]
    it('works with all arguments', () => {
      const result = map(inc, numbers)
      deepEqual(expected, result)
    })

    it('works by applying partial arguments', () => {
      const incAll = map(inc)
      const result = incAll(numbers)
      deepEqual(expected, result)
    })
  })

  describe('filter', () => {
    const expected = [ 2, 4 ]
    it('works with all arguments', () => {
      const result = filter(isEven, numbers)
      deepEqual(expected, result)
    })

    it('works by applying partial arguments', () => {
      const filterEven = filter(isEven)
      const result = filterEven(numbers)
      deepEqual(expected, result)
    })
  })
})
