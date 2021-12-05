// Public

function drawPath({ source, dest }) {
  const rift = [];
  if (source.y === dest.y) {
    const start = Math.min(source.x, dest.x);
    const end = Math.max(source.x, dest.x);

    for (let i = start; i <= end; i++) {
      rift.push([i, source.y]);
    }
  } else if (source.x === dest.x) {
    const start = Math.min(source.y, dest.y);
    const end = Math.max(source.y, dest.y);

    for (let i = start; i <= end; i++) {
      rift.push([source.x, i]);
    }
  } else {
    // diagonal
    for (let i = 0; i <= Math.abs(source.x - dest.x); i++) {
      const x = source.x < dest.x ? source.x + i : source.x - i;
      const y = source.y < dest.y ? source.y + i : source.y - i;
      rift.push([x, y]);
    }
  }
  return rift;
}

function part2(input) {
  const riftMap = input.reduce((map, rift) => {
    const riftPath = drawPath(rift);
    riftPath.forEach(([row, col]) => {
      map[row] = map?.[row] ?? [];
      map[row][col] = (map[row]?.[col] ?? 0) + 1;
    });
    return map;
  }, []);

  return riftMap.flat().filter((coord) => coord > 1).length;
}

module.exports = { drawPath, part2 };
