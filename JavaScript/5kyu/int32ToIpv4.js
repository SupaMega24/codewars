
https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function int32ToIp(int32) {
    // Extract each octet using bitwise operations
    let octet1 = (int32 >>> 24) & 255;
    let octet2 = (int32 >>> 16) & 255;
    let octet3 = (int32 >>> 8) & 255;
    let octet4 = int32 & 255;

    // Combine the octets into the final IPv4 address string
    return `${octet1}.${octet2}.${octet3}.${octet4}`;
}


