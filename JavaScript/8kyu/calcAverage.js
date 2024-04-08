// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// MY SOLUTION
function findAverage(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return 0;
    }

    // Use reduce to calculate the sum of numbers
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate the average by dividing the sum by the number of elements
    const average = sum / array.length;

    return average;
}