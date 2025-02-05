


/**
 * @notice [Link to this Kata](https://www.codewars.com/kata/558fc85d8fd1938afb000014/solutions/javascript)
 * @dev Returns the sum of the two lowest positive numbers in an array.
 * @param numbers An array of at least 4 positive integers.
 * @return The sum of the two smallest numbers in the array.
 */

const sumTwoSmallestNumbers = numbers => {
    // Sort the array in ascending order to bring the smallest numbers to the front
    numbers.sort((a, b) => a - b);

    // Retrieve and sum the first two elements, which are the smallest numbers
    return numbers[0] + numbers[1];
}

/**
 * How This Function Works
 *
 * 1. Sorting the array:
 *    The `.sort((a, b) => a - b)` method sorts the numbers in ascending order.
 *    This ensures that the two smallest numbers appear at the start of the array.
 *
 * 2. Accessing the two smallest numbers:
 *    After sorting, the smallest number is at index `0`, and the second smallest at index `1`.
 *
 * 3. Summing the smallest numbers:
 *    We simply add `numbers[0] + numbers[1]` to get the sum of the two lowest numbers.
 *
 * Example Execution:
 * ```js
 * console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // Output: 7
 * console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // Output: 3453455
 * ```
 */

