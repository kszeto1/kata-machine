const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    //1. base case
    // off map
    if (
        curr.x < 0 ||
        curr.y >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    //on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // it's the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // if we've seen it
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3 recurse
    // pre
    // recurse
    // post

    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    //recurse
    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    /**
 list of strings, get from S to E
 [
    "############E#",
    "#            #",
    "#S############",
 ]

 base case:                             recursive step
    1. it's a wall                          check every surrounding tile
    2. it's off the map
    3. it's the end
    4. if we have seen it

*/
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
