// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// MY SOLUTION
const count = string => {
    // Create an empty object to store character counts
    const charCount = {};

    // Iterate over each character in the input string
    for (let char of string) {
        // If the character is already in the charCount object, increment its count
        // Otherwise, initialize its count to 1
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Return the charCount object containing the counts of each character
    return charCount;
}