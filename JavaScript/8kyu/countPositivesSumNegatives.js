// Given an array of integers.

// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

// Function to count positive numbers and sum negative numbers in an array
const countPositivesSumNegatives = input => {
    // Check if the input is null or an empty array
    if (!input || input.length === 0) {
        return []; // Return an empty array if the input is invalid
    }

    // Initialize counters for positive numbers and sum for negative numbers
    let countPositives = 0;
    let sumNegatives = 0;

    // Iterate over each number in the input array
    input.forEach(number => {
        // Use ternary operator to count positives and sum negatives
        number > 0 ? countPositives++ : number < 0 ? sumNegatives += number : null;
    });

    // Return the result as an array where the first element is the count of positives
    // and the second element is the sum of negatives
    return [countPositives, sumNegatives];
}