import { describe, it, expect } from "vitest";

import { max, fizzBuzz } from "../src/intro";


describe("max", () => {
    it("should return the first arg if it is greater then the second arg", () => {
        // Arrange
        const a = 10;
        const b = 5;

        // Act
        const result = max(a, b)

        // Assert
        expect(result).toBe(a)
    })

    it("should return the second arg if it is greater the the firs arg", () => {
        const a = 5;
        const b = 10;

        const result = max(a, b)

        expect(result).toBe(b)
    })

    it("should return the first arg as default case", () => {
        const result = max(5, null)

        expect(result).toBe(5)
    })


    it("should return the first arg as default case", () => {
        expect(max(null, undefined)).toBe(null)
    })

})

describe('FizzBuzz', () => {
    it('should return FizzBuzz if args is divisable with 3 and 5', () => {
        
    })

    it('should return Fizz if args is divisable only with 3', () => {
        
    })

    it('should return Fizz if args is divisable only with 5', () => {
        
    })

    it('should return arg as a string if args is not divisible with 3 nor 5', () => {
        
    })

})

