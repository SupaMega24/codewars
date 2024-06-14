/**
 * @author Charlie J
 * @notice Checks whether two arrays have the "same" elements, with the same multiplicities.
 * @dev The elements in the second array must be the squares of the elements in the first array.
 * @param {number[]} a The first array of numbers.
 * @param {number[]} b The second array of numbers.
 * @return {boolean} True if the two arrays have the "same" elements with the same multiplicities, false otherwise.
 * @example
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * comp(a, b) returns true
 * @example
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
 * comp(a, b) returns false
 */

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

const comp = (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;

    // Create a frequency map for squares of elements in `a`
    const freqMapA = a.reduce((map, num) => {
        const square = num * num;
        map[square] = (map[square] || 0) + 1;
        return map;
    }, {});

    // Create a frequency map for elements in `b`
    const freqMapB = b.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
    }, {});

    // Compare the frequency maps
    for (const key in freqMapB) {
        if (freqMapB[key] !== freqMapA[key]) {
            return false;
        }
    }

    return true;
}