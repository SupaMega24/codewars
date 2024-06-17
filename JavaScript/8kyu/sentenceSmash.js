/**
 * @author Charlie J 
 * @notice Write a function that takes an array of words 
 * and smashes them together into a sentence and returns the sentence. 
 * You can ignore any need to sanitize words or add punctuation, 
 * but you should add spaces between each word. Be careful, 
 * there shouldn't be a space at the beginning or the end of the sentence! 
 */

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

const smash = words => {
    // The .join method is used to concatenate all elements of the array into a string.
    // Each word in the array is separated by a space (' ') in the resulting string.
    // This method ensures there are no leading or trailing spaces in the sentence.
    return words.join(' ');
};