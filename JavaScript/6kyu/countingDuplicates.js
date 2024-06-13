/**
 * @author Charlie J
 * @notice Write a function that will return the count of distinct case-insensitive alphabetic characters 
 * and numeric digits that occur more than once in the input string. 
 * The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 * 
 * @param {string} text - The input string to analyze. 
 * Assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 * @returns {number} The count of distinct characters that repeat more than once in the input string.
 */

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

const duplicateCount = text => {
    // Step 1: Normalize the input string to lowercase to ignore case differences
    const lowerCaseInput = text.toLowerCase();

    // Step 2: Initialize an empty object to serve as a frequency map for each character
    const freqMap = {};
    // Iterate over each character in the normalized string
    for (let char of lowerCaseInput) {
        // Check if the character is an alphanumeric character to avoid counting non-alphanumeric characters
        if (/[a-z0-9]/.test(char)) {
            // Increment the count for the current character in the frequency map
            // If the character is not yet in the map, initialize its count to 1
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
    }

    // Step 3: Initialize a counter for characters that occur more than once
    let repeatCount = 0;
    // Iterate over each entry in the frequency map
    for (let key in freqMap) {
        // If the count for the current character is greater than 1, increment the repeat counter
        if (freqMap[key] > 1) {
            repeatCount++;
        }
    }

    // Return the total count of repeating characters
    return repeatCount;
};
