// You will be given an array a and a value x. 
// All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


//*****************************//
//******** MY SOLUTION ********//
//*****************************//
const check = (a, x) => {
    // Use the includes() method to check if 'x' is present in the array 'a'
    return a.includes(x);
}