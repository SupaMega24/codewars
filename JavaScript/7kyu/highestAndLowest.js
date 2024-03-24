// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.




// MY SOLUTION

const highAndLow = (numbers) => {
    const numericValues = numbers.split(' ').map(Number);

    const highestNumber = Math.max(...numericValues);
    const lowestNumber = Math.min(...numericValues);

    return `${highestNumber} ${lowestNumber}`;
}