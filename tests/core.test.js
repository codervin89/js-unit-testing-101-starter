import { describe, it, expect } from "vitest";

describe('placeholder', () => {
  it('placeholder', () => {})
})

// // counter.test.js
// import { describe, it, expect, beforeAll, beforeEach, afterEach } from 'vitest'
// import { createCounter } from './core.js'

// describe('createCounter()', () => {
//   let counter
//   let initLog = []

//   beforeAll(() => {
//     // Run once before all tests
//     initLog.push('beforeAll ran')
//   })

//   beforeEach(() => {
//     // Run before each test
//     counter = createCounter()
//     initLog.push('beforeEach ran')
//   })

//   afterEach(() => {
//     // Run after each test
//     initLog.push(`afterEach ran: counter value was ${counter.getValue()}`)
//   })

//   it('should start at 0', () => {
//     expect(counter.getValue()).toBe(0)
//   })

//   it('should increment the counter', () => {
//     counter.increment()
//     expect(counter.getValue()).toBe(1)
//   })

//   it('should decrement the counter', () => {
//     counter.increment()
//     counter.increment()
//     counter.decrement()
//     expect(counter.getValue()).toBe(1)
//   })

//   it('should reset the counter to 0', () => {
//     counter.increment()
//     counter.reset()
//     expect(counter.getValue()).toBe(0)
//   })

//   it('should track setup/teardown logs', () => {
//     // This test just checks if beforeAll and afterEach are running
//     expect(initLog).toContain('beforeAll ran')
//     expect(initLog.some(line => line.startsWith('afterEach ran'))).toBe(true)
//   })
// })