
https://www.codewars.com/kata/5544c7a5cb454edb3c000047/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function bouncingBall(h, bounce, window) {
    // Check if the input conditions are valid
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }

    let count = 0;

    // Simulate the bouncing of the ball
    while (h > window) {
        // Ball passes the window falling down
        count++;
        h *= bounce;
        // Check if the ball bounces back above the window
        if (h > window) {
            // Ball passes the window bouncing up
            count++;
        }
    }

    return count;
}
