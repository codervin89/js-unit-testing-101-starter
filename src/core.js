/**
 * Fetches user data from a public placeholder API.
 * Useful for writing async test cases with real-world structure.
 *
 * @returns {Promise<Array>} Array of user objects
 */
export async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return await response.json()
}

/**
 * Determines if a person is an adult (18+).
 *
 * @param {number} age - The age to check
 * @returns {boolean} True if age is 18 or older, otherwise false
 */
export function isAdult(age) {
    if(age < 0) {
        throw new Error('Age cannot be negative')
    }

    if(age === undefined) {
        throw new Error('Age is required')
    }

    if(typeof age !== 'number') {
        throw new Error('Age must be a number')
    }

    return age >= 18
}

/**
 * Creates a counter object with increment, decrement, reset, and getValue methods.
 * Useful for lifecycle-related test cases (beforeEach, afterEach, etc.)
 *
 * @returns {object} Counter API
 */
export function createCounter() {
  let value = 0

  return {
    increment() {
      value += 1
    },
    decrement() {
      value -= 1
    },
    reset() {
      value = 0
    },
    getValue() {
      return value
    }
  }
}