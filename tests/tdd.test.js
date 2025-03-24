import { describe, it, expect } from 'vitest'
import { calculateAverage, add } from '../src/tdd'

describe('calculateAverage()', () => {
  it('should return the average of [2, 4, 6]', () => {
    expect(calculateAverage([2, 4, 6])).toBe(4)
  })

  it('should return the average of a single-element array', () => {
    expect(calculateAverage([10])).toBe(10)
  })

  it('should return 0 for an empty array', () => {
    expect(calculateAverage([])).toBe(0)
  })
})


describe('add()', () => {
  it('should return 5 for add(2, 3)', () => {
    expect(add(2, 3)).toBe(5)  // 🔴 Red: Fails first
  })

  it('should return 0 in case of no parameter', () => {
    expect(add()).toBe(0)  // 🔴 Red: Fails first
  })
})

// TODO: test isEven() function
// As a user I want to know if a number is even or not
// If the number is even, return true
// If the number is odd, return false
// If no argument is passed, return false