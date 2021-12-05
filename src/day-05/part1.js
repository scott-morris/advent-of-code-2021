// Public

function drawStraightPath({ source, dest }) {
  const rift = [];
  if (source.x !== dest.x) {
    // y must be equal
    const start = Math.min(source.x, dest.x);
    const end = Math.max(source.x, dest.x);

    for (let i = start; i <= end; i++) {
      rift.push([i, source.y]);
    }
  } else {
    // x must be equal
    const start = Math.min(source.y, dest.y);
    const end = Math.max(source.y, dest.y);

    for (let i = start; i <= end; i++) {
      rift.push([source.x, i]);
    }
  }
  return rift;
}

function part1(input) {
  // Only keep entries where x1 === x2 or y1 === y2
  const filteredList = input.filter(
    ({ source, dest }) => source.x === dest.x || source.y === dest.y
  );

  // Process the filtered list
  const riftMap = filteredList.reduce((map, rift) => {
    const riftPath = drawStraightPath(rift);
    riftPath.forEach(([row, col]) => {
      map[row] = map?.[row] ?? [];
      map[row][col] = (map[row]?.[col] ?? 0) + 1;
    });
    return map;
  }, []);

  return riftMap.flat().filter((coord) => coord > 1).length;
}

module.exports = { drawStraightPath, part1 };
