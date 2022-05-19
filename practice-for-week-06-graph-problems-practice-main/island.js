function getNeighbors(row, col, graph) {

  let neighbors = []
  // Check bottom
if (row < graph.length -1 && graph[row + 1][col] === 1)neighbors.push( [row + 1 , col])
  // Check top
  if ( row > 0 &&graph[row - 1][col]===1)neighbors.push( [row - 1 , col])

  // Check right
  if ( col < graph[0].length - 1&&graph[row ][col+1]===1)neighbors.push( [row , col+1])

  // Check left
  if (col>0&& graph[row ][col-1]===1)neighbors.push( [row , col-1])

  // Return neighbors
  return neighbors;




  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
}


function islandSize(row, col, graph) {
  let visited = new Set();
  const stack = [[row, col]];
  visited.add(JSON.stringify([row, col]));
  let size = 0;

while(stack.length) {
  let currentNode = stack.pop();
  size++;
  
  let neighbors = getNeighbors(currentNode[0], currentNode[1], graph);
  if (neighbors) {
    neighbors.forEach(el => {
      if (!visited.has(JSON.stringify(el))) {
      stack.push(el);
      visited.add(JSON.stringify(el));
      }
    })
  }
}
return size;
}
  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here


module.exports = [getNeighbors, islandSize];
