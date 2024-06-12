
// Implement the function unique_in_order which takes as argument a sequence 
// and returns a list of items without any elements with the same value next to each other 
// and preserving the original order of elements.


/////////// MY SOLUTION ///////////

const uniqueInOrder = sequence => {
    // Initialize an empty array to store the result
    let result = [];

    // Convert the input sequence to an array if it's not already
    const seqArray = Array.isArray(sequence) ? sequence : [...sequence];

    // Iterate over the sequence
    for (let i = 0; i < seqArray.length; i++) {
        // Check if the current element is different from the last added element
        if (i === 0 || seqArray[i] !== seqArray[i - 1]) {
            // Add the current element to the result array
            result.push(seqArray[i]);
        }
    }

    return result;
}