
https://www.codewars.com/kata/52423db9add6f6fc39000354/solutions/javascript

//*****************************//
//******** MY SOLUTION ********//
//*****************************//

function getGeneration(cells, generations) {
    // Helper function to count live neighbors around a given cell
    function countLiveNeighbors(grid, x, y) {
        let liveNeighbors = 0;
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];

        directions.forEach(([dx, dy]) => {
            const nx = x + dx;
            const ny = y + dy;
            if (grid[nx] && grid[nx][ny] === 1) {
                liveNeighbors++;
            }
        });

        return liveNeighbors;
    }

    // Helper function to get the bounds of the live cells in the grid
    function getBounds(grid) {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        grid.forEach((row, x) => {
            row.forEach((cell, y) => {
                if (cell === 1) {
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            });
        });

        // If no live cells, return bounds for an empty grid
        if (minX === Infinity) return null;

        return { minX, maxX, minY, maxY };
    }

    // Helper function to crop the grid around the live cells
    function cropGrid(grid) {
        const bounds = getBounds(grid);
        if (!bounds) return [[]]; // Return empty grid if no live cells

        const { minX, maxX, minY, maxY } = bounds;
        const cropped = [];
        for (let x = minX; x <= maxX; x++) {
            cropped.push(grid[x].slice(minY, maxY + 1));
        }
        return cropped;
    }

    // Expands the grid by padding it with dead cells around the current grid
    function expandGrid(grid) {
        const expanded = grid.map(row => [0, ...row, 0]);
        expanded.unshift(Array(expanded[0].length).fill(0));
        expanded.push(Array(expanded[0].length).fill(0));
        return expanded;
    }

    // Simulate generations
    let grid = cells;
    for (let gen = 0; gen < generations; gen++) {
        grid = expandGrid(grid);
        const newGrid = grid.map(row => row.slice()); // Deep copy of the grid

        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[x].length; y++) {
                const liveNeighbors = countLiveNeighbors(grid, x, y);
                if (grid[x][y] === 1) {
                    if (liveNeighbors < 2 || liveNeighbors > 3) {
                        newGrid[x][y] = 0; // Dies due to underpopulation or overcrowding
                    }
                } else {
                    if (liveNeighbors === 3) {
                        newGrid[x][y] = 1; // Becomes alive due to reproduction
                    }
                }
            }
        }

        grid = newGrid;
    }

    return cropGrid(grid);
}

// Test case
const initialGrid = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1]
];

const generations = 1;
const result = getGeneration(initialGrid, generations);
console.log(result);
