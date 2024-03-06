// Write a function that accepts an integer n and a string s as parameters, 
//and returns a string of s repeated exactly n times.


// MY SOLUTION

const repeatStr = (n, s) => {
    // Check if n is a non-negative integer
    if (Number.isInteger(n) && n >= 0) {
        // Use Array.fill and Array.join to repeat the string
        return Array(n).fill(s).join('');
    } else {
        // Return an error message for invalid input
        return 'Invalid input: n must be a non-negative integer.';
    }
}

// CLEVER SOLUTION

// const repeatStr(n,s) => s.repeat(n);