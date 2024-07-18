
https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

const enough = (cap, on, wait) => {
    // Calculate the available space on the bus
    let availableSpace = cap - on;

    // If the available space is greater than or equal to the number of waiting passengers, return 0
    if (availableSpace >= wait) {
        return 0;
    } else {
        // Otherwise, return the number of passengers that can't fit
        return wait - availableSpace;
    }
}