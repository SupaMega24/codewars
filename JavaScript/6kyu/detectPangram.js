
//*****************************//
//******** Description ********//
//*****************************//


// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.


//*****************************//
//******** MY SOLUTION ********//
//*****************************//

const isPangram = (string) => {
    // Initialize a set to store unique alphabetic characters
    const alphabetSet = new Set();

    // Convert the string to lowercase to make the check case-insensitive
    const lowerCaseString = string.toLowerCase();

    // Iterate through each character of the string
    for (const char of lowerCaseString) {
        // If the character is an alphabetic letter, add it to the set
        if (char >= 'a' && char <= 'z') {
            alphabetSet.add(char);
        }
    }

    // Return true if the set size is 26 (indicating a pangram), else false
    return alphabetSet.size === 26 ? true : false;
}
