
// Implement a function that accepts 3 integer values a, b, c. 
// The function should return true if a triangle can be built with the sides of given length 
// and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).


// SOLUTION 

const isTriangle = (a, b, c) => {

    // Check if the sum of lengths of any two sides is greater than the length of the third side
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        // Check if the surface area of the triangle is greater than 0
        if ((a * b * c) / 2 > 0) {
            return true;
        }
    }
    return false;

}