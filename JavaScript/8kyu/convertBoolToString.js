// DESCRIPTION

//Complete the method that takes a boolean value and 
//return a "Yes" string for true, or a "No" string for false.

// MY SOLUTION

/**
 * Converts a boolean value to its word representation.
 * @param {boolean} bool - The boolean value to convert.
 * @returns {'Yes'|'No'} - Returns 'Yes' if the input is true, otherwise returns 'No'.
 */
const boolToWord = (bool) => bool === true ? 'Yes' : 'No';