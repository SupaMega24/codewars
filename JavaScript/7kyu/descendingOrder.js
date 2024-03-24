// Your task is to make a function that can take any non-negative integer 
// as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.



// MY SOLUTION
const descendingOrder = n => {
    // Convert the number to a string and split it into an array of digits
    const digits = n.toString().split('');

    // Sort the array of digits in descending order
    const descendingArr = digits.sort((a, b) => b - a);

    // Join the sorted digits and parse it back to a number
    return parseInt(descendingArr.join(''));
}