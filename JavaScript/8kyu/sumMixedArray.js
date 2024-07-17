
https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

const sumMix = x => {
    // Initialize a variable to hold the sum
    let sum = 0;

    // Iterate over each element in the array
    for (let i = 0; i < x.length; i++) {
        // Convert the current element to a number and add it to the sum
        sum += Number(x[i]);
    }

    // Return the total sum
    return sum;
}