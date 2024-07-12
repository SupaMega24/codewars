
//*****************************//
//******** Description ********//
//*****************************//

// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

const order = (words) => {
    if (!words) return ""; // If the input string is empty, return an empty string.

    // Split the string into individual words
    const wordArray = words.split(" ");

    // Sort the words based on the number within each word
    wordArray.sort((a, b) => {
        // Extract the number from each word and compare them
        const numA = a.match(/\d/)[0];
        const numB = b.match(/\d/)[0];
        return numA - numB;
    });

    // Join the sorted words back into a single string
    return wordArray.join(" ");
}