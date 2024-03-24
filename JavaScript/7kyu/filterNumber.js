// Filter the number
// Oh, no! The number has been mixed up with the text. 
// Your goal is to retrieve the number from the text, 
// can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, 
// you have to return all the numbers in that string in the order they occur.


// My Solution

const filterString = value => {
    // Convert the string into an array of characters
    const characters = value.split('');

    // Use .filter() to keep only the numeric characters
    const numbers = characters.filter(char => !isNaN(char));

    // Join the numbers back into a string
    const numberString = numbers.join('');

    // Convert the string to a number  
    return Number(numberString);
}