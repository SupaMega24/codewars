
https://www.codewars.com/kata/52742f58faf5485cae000b9a/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

/**
 * @notice Formats a given number of seconds into a human-readable duration.
 * @dev Uses the largest possible units of time (years, days, hours, minutes, seconds).
 *      The output uses natural language formatting rules.
 * @param {number} seconds - The number of seconds to format (must be a non-negative integer).
 * @return {string} A human-readable string representing the duration.
 */
function formatDuration(seconds) {
    // Handle the special case where the duration is 0 seconds
    if (seconds === 0) return "now";

    // Define the units of time and their corresponding seconds
    const units = [
        { label: "year", seconds: 365 * 24 * 60 * 60 }, // 1 year = 365 days
        { label: "day", seconds: 24 * 60 * 60 },        // 1 day = 24 hours
        { label: "hour", seconds: 60 * 60 },            // 1 hour = 60 minutes
        { label: "minute", seconds: 60 },               // 1 minute = 60 seconds
        { label: "second", seconds: 1 }                 // Base unit = seconds
    ];

    // Store the resulting duration parts in this array
    const result = [];

    // Loop over each unit and determine how many of that unit can fit into the remaining seconds
    for (const unit of units) {
        // Calculate how many of this unit can fit into the remaining seconds
        const value = Math.floor(seconds / unit.seconds);

        // If the unit fits at least once, store the value and its label in the result array
        if (value > 0) {
            // Append the value and label, using pluralization if the value is greater than 1
            result.push(`${value} ${unit.label}${value > 1 ? "s" : ""}`);

            // Subtract the corresponding amount of seconds from the remaining time
            seconds -= value * unit.seconds;
        }
    }

    // If only one time unit is present, return it directly
    if (result.length === 1) {
        return result[0];
    }

    // If more than one unit is present, format them with commas and "and" for the last unit
    const lastPart = result.pop(); // Remove and store the last element
    return result.join(", ") + " and " + lastPart; // Join the parts properly
}
