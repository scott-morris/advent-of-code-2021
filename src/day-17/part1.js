// Public

function travel(coords, velocity) {
  const [cX, cY] = coords;
  const [vX, vY] = velocity;

  return {
    coords: [cX + vX, cY + vY],
    velocity: [Math.max(vX - 1, 0), vY - 1],
  };
}

function lands(startingVelocity, target) {
  const [xMin, xMax] = target.x;
  const [yMin, yMax] = target.y;

  let velocity = [...startingVelocity];
  let adjustment = null;
  let maxHeight = 0;

  let x = 0;
  let y = 0;

  for (;;) {
    const step = travel([x, y], velocity);

    const [sX, sY] = step.coords;
    const [vX, vY] = step.velocity;

    const landed = sX >= xMin && sX <= xMax && sY >= yMin && sY <= yMax;
    const gonePast = x > xMax || y < yMin;
    const stoppedShort = vX === 0 && x < xMin;

    if (landed || gonePast || stoppedShort) {
      adjustment = stoppedShort ? 1 : landed ? 0 : -1;
      break;
    } else {
      // Update for next step
      velocity = [vX, vY];
      x = sX;
      y = sY;
      maxHeight = Math.max(maxHeight, y);
    }
  }

  return { adjustment, maxHeight };
}

function part1(input, startingVelocity = 1000) {
  let maxHeight = null;
  let vX = 1;

  for (let vY = startingVelocity; vY > 0; ) {
    const attempt = lands([vX, vY], input);

    if (attempt.adjustment === 0) {
      maxHeight = attempt.maxHeight;
      break;
    } else if (attempt.adjustment === -1) {
      // we've overshot, let's start again with a lower height
      vX = 1;
      vY -= 1;
    } else {
      vX += 1;
    }
  }

  return maxHeight;
}

module.exports = { travel, lands, part1 };
