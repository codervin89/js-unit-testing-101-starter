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
export function getFormattedDate() {
  return dayjs().format('YYYY-MM-DD');
}
