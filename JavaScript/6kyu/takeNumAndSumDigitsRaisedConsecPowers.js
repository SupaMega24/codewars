
https://www.codewars.com/kata/5626b561280a42ecc50000d1/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function sumDigPow(a, b) {
    // Initialize an array to hold the numbers that fulfill the property
    let result = [];

    // Iterate through each number in the range [a, b]
    for (let num = a; num <= b; num++) {
        // Convert the number to a string to easily access each digit
        let numStr = String(num);

        // Calculate the sum of digits raised to the power of their positions
        let sum = 0;
        for (let i = 0; i < numStr.length; i++) {
            sum += Math.pow(Number(numStr[i]), i + 1);
        }

        // Check if the sum equals the original number
        if (sum === num) {
            result.push(num);
        }
    }

    // Return the list of numbers that fulfill the property
    return result;
}
