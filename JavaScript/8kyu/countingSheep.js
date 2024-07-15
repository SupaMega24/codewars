
https://www.codewars.com/kata/54edbc7200b811e956000556/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

const countSheeps = sheep => {

    // Use reduce to iterate through the array, starting with an initial count of 0
    return sheep.reduce((count, sheep) => {

        /// Increment the count if the current element is true
        if (sheep === true) {
            count++;
        }
        return count;
    }, 0); // Start with an initial count of 0
}