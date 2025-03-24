import { describe, it, expect } from 'vitest'
import { calculateAverage, isEven } from '../src/tdd'

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