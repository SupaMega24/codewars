// You are going to be given a word. 
// Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

//MY SOLUTION

const getMiddle = word => {
    const length = word.length;

    return length % 2 === 1
        ? word[Math.floor(length / 2)]  // For odd-length words
        : word.slice(length / 2 - 1, length / 2 + 1);  // For even-length words
};

