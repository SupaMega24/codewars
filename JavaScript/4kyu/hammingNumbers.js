
https://www.codewars.com/kata/526d84b98f428f14a60008da/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function hamming(n) {
    const hammingNumbers = [1]; // The first Hamming number is 1
    const seen = new Set([1]); // Set to track numbers we've already seen
    let i2 = 0, i3 = 0, i5 = 0; // Pointers for 2, 3, 5 multipliers

    while (hammingNumbers.length < n) {
        const next2 = hammingNumbers[i2] * 2;
        const next3 = hammingNumbers[i3] * 3;
        const next5 = hammingNumbers[i5] * 5;

        const nextHamming = Math.min(next2, next3, next5);
        hammingNumbers.push(nextHamming);

        if (nextHamming === next2) i2++;
        if (nextHamming === next3) i3++;
        if (nextHamming === next5) i5++;
    }

    return hammingNumbers[n - 1];
}