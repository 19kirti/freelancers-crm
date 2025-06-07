// /**
//  * Format a number as currency
//  * @param {number} amount - The amount to format
//  * @param {string} currency - The currency code (default: USD)
//  * @returns {string} Formatted currency string
//  */
// export const formatCurrency = (amount, currency = 'USD') => {
//   if (amount === undefined || amount === null) return '-';
  
//   return new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency,
//     minimumFractionDigits: 2
//   }).format(amount);
// };

// /**
//  * Format a date string or object
//  * @param {string|Date} date - The date to format
//  * @param {object} options - Intl.DateTimeFormat options
//  * @returns {string} Formatted date string
//  */
// export const formatDate = (date, options = {}) => {
//   if (!date) return 'N/A';
  
//   const defaultOptions = {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   };
  
//   return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(new Date(date));
// };

// /**
//  * Calculate days remaining until a date
//  * @param {string|Date} date - The target date
//  * @returns {number} Days remaining (negative if in past)
//  */
// export const daysRemaining = (date) => {
//   if (!date) return null;
  
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
  
//   const targetDate = new Date(date);
//   targetDate.setHours(0, 0, 0, 0);
  
//   const diffTime = targetDate - today;
//   return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// };