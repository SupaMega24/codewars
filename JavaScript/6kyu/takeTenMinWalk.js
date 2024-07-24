

https://www.codewars.com/kata/54da539698b8a2ad76000228/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function isValidWalk(walk) {
    // Check if the walk is exactly 10 minutes long
    if (walk.length !== 10) {
        return false;
    }

    // Initialize coordinates
    let x = 0, y = 0;

    // Traverse the walk
    for (let direction of walk) {
        switch (direction) {
            case 'n':
                y += 1;
                break;
            case 's':
                y -= 1;
                break;
            case 'e':
                x += 1;
                break;
            case 'w':
                x -= 1;
                break;
        }
    }

    // Check if back to the starting point
    return x === 0 && y === 0;
}
