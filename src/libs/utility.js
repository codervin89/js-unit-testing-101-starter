import dayjs from 'dayjs';
import validator from 'validator'


/**
 * Validates an email and extracts the domain.
 *
 * @param {string} email - The email to validate
 * @returns {string} Domain part of the email
 */
export function validateAndExtractEmailDomain(email) {
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email address')
  }

  return email.split('@')[1]
}



/**
 * Returns the current date formatted as 'YYYY-MM-DD'.
 *
 * @returns {string} Formatted current date
 */
export function getFormattedDate(date) {
  return dayjs(date).format('YYYY-MM-DD');
}


/**
 * Returns a random number between 0 and 40.
 * @returns {number} Random number between 0 and 40
 */
export const getTemperture = (city) => {
  console.log(`Getting temperature for ${city}`)
  return Math.floor(Math.random() * 40);
}