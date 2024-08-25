
https://www.codewars.com/kata/54d496788776e49e6b00052f/solutions/javascript



//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function sumOfDivided(lst) {
    // Helper function to determine if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Helper function to find the prime factors of a number
    function primeFactors(num) {
        let factors = new Set();
        num = Math.abs(num); // Consider only the absolute value for factors
        for (let i = 2; i <= num; i++) {
            while (num % i === 0 && isPrime(i)) {
                factors.add(i);
                num /= i;
            }
        }
        return factors;
    }

    let primeSumMap = new Map(); // Map to store prime factors and their corresponding sums

    // Iterate over each number in the list and find its prime factors
    for (let num of lst) {
        let factors = primeFactors(num);
        factors.forEach(factor => {
            // Accumulate the sum of numbers for each prime factor
            primeSumMap.set(factor, (primeSumMap.get(factor) || 0) + num);
        });
    }

    // Convert the map to an array of [prime, sum] pairs and sort by prime number
    let result = Array.from(primeSumMap).sort((a, b) => a[0] - b[0]);

    return result;
}

// Example Usage
let I = [12, 15];
console.log(sumOfDivided(I)); // Output: [[2, 12], [3, 27], [5, 15]]

I = [15, 30, -45];
console.log(sumOfDivided(I)); // Output: [[2, 30], [3, 0], [5, 0]]
