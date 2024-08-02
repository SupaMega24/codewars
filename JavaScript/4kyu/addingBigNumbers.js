
https://www.codewars.com/kata/525f4206b73515bffb000b21/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function add(a, b) {
    let result = '';
    let carry = 0;

    // Ensure a is the longer string.
    if (b.length > a.length) [a, b] = [b, a];

    // Pad the shorter string with leading zeros.
    b = b.padStart(a.length, '0');

    // Iterate from the end to the beginning of the strings.
    for (let i = a.length - 1; i >= 0; i--) {
        const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        result = (sum % 10) + result;  // Get the digit to add to the result.
        carry = Math.floor(sum / 10);  // Get the carry.
    }

    // If there's a remaining carry, add it to the result.
    if (carry) result = carry + result;

    return result;
}
