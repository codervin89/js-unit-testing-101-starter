import { getFormattedDate, getTemperture } from "./libs/utility"

/**
 * Asynchronous function that fetches user names from an API.
 * @returns 
 */
export async function fetchUserNames() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  const users = await response.json()
  return users.map(user => user.name)
}

/**
 * 
 * @param {*} city 
 * @returns 
 */
export const getCityWeather =  (city) => {
  if (!city) {
    throw new Error('City is required')
  }
  return getTemperture(city)
}


/**
 * Returns the current date formatted as 'YYYY-MM-DD'.
 * @param {*} date 
 * @returns 
 */
export const formatDate = (date) => {
  return getFormattedDate(date)
}