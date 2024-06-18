
// Write a function, persistence, that takes in a positive parameter num and 
// returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

//*****************************//
//******** MY SOLUTION ********//
//*****************************//
function persistence(num) {
    // Base case: if the number is already a single digit, return 0
    if (num < 10) {
        return 0;
    }

    // Function to calculate the product of digits
    const getDigitsProduct = (number) => {
        let product = 1;
        while (number !== 0) {
            product *= number % 10; // Multiply current digit
            number = Math.floor(number / 10); // Remove last digit
        }
        return product;
    };

    // Initialize a counter for the number of multiplications
    let count = 0;

    // Loop until the number becomes a single digit
    while (num >= 10) {
        // Get the product of the current number's digits
        num = getDigitsProduct(num);

        // Increment the counter
        count++;
    }

    return count;
}