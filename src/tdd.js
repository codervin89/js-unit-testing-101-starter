export function calculateAverage(numbers) {
    if (numbers.length === 0) return 0
  
    const sum = numbers.reduce((total, num) => total + num, 0)
    return sum / numbers.length
  }

export function add(a, b) {
    if (a === undefined || b === undefined) return 0
    return a + b            
}

// TODO: implement isEven
// As a user I want to know if a number is even or not
// If the number is even, return true
// If the number is odd, return false
// If no argument is passed, return false