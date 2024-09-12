//You can find it here: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/solidity

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
    function past(int h, int m, int s) public pure returns (int) {
        return (h * 3600000) + (m * 60000) + (s * 1000);
    }
}
