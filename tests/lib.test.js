// import { describe, it, expect, vi } from 'vitest'
// import * as dayjs from 'dayjs'
// import { getFormattedDate } from './lib.js'

// vi.mock('dayjs', () => {
//   return {
//     default: vi.fn(() => ({
//       format: vi.fn(() => '2024-03-24') // mocked return value
//     }))
//   }
// })

// describe('getFormattedDate()', () => {
//   it('should return mocked formatted date', () => {
//     const result = getFormattedDate()
//     expect(result).toBe('2024-03-24')
//     expect(dayjs.default).toHaveBeenCalled()
//   })
// })


// import { describe, it, expect, vi } from 'vitest'
// import * as validator from 'validator'
// import { validateAndExtractEmailDomain } from './lib.js'

// vi.mock('validator', () => ({
//   default: {
//     isEmail: vi.fn()
//   }
// }))

// describe('validateAndExtractEmailDomain()', () => {
//   it('should return domain when email is valid', () => {
//     validator.default.isEmail.mockReturnValue(true)

//     const result = validateAndExtractEmailDomain('test@example.com')
//     expect(result).toBe('example.com')
//     expect(validator.default.isEmail).toHaveBeenCalledWith('test@example.com')
//   })

//   it('should throw error when email is invalid', () => {
//     validator.default.isEmail.mockReturnValue(false)

//     expect(() => validateAndExtractEmailDomain('not-an-email')).toThrow('Invalid email address')
//   })
// })