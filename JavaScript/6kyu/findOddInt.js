// Given an array of integers, find the one that appears an odd number of times.


// MY SOLUTION
function findOdd(arr) {
    const count = {};

    // Count occurrences of each number
    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    // Find the number with an odd count
    for (const num in count) {
        if (count[num] % 2 !== 0) {
            return parseInt(num);
        }
    }

    // If no odd count is found, return null or handle accordingly
    return null;
}