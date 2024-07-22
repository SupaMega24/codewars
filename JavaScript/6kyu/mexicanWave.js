
https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function wave(str) {
    // Initialize an empty array to store the wave patterns
    let result = [];

    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
        // If the character is a space, skip it
        if (str[i] === ' ') continue;

        // Split the string into an array of characters
        let waveStr = str.split('');

        // Convert the current character to uppercase
        waveStr[i] = waveStr[i].toUpperCase();

        // Join the array back into a string and add it to the result array
        result.push(waveStr.join(''));
    }

    // Return the array of wave patterns
    return result;
}


