
https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function domainName(url) {
    // Remove the protocol (http://, https://, etc.) and get the part after '://'
    const cleanUrl = url.replace(/^(?:https?:\/\/)?(?:www\.)?/, '');

    // Split the remaining string by the first '/' or by '.' to get the domain
    const domainParts = cleanUrl.split('/')[0].split('.');

    // Return the first part of the domain
    return domainParts[0];
}