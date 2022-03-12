import solve from "./solve";

function degToRad(angle) {
  return (Math.PI * angle) / 180;
}

function projectileInfo(angle, initialVelocity, initialLevel) {
  // First maximum height;
  angle = degToRad(angle);
  let u = initialVelocity * Math.sin(angle);
  let v = 0;
  let a = -9.8;
  let maximumHeight = solve("s", { v, u, a }) + initialLevel;

  //   Next time of flight
  //  Time to come up + time to come down
  let timeToComeUp = solve("t", { v, u, a });
  a = 9.8;
  u = 0;
  let s = maximumHeight;

  let timeToComeDown = solve("t", { a, u, s });

  let timeOfFlight = timeToComeUp + timeToComeDown;
  if (isNaN(timeOfFlight)) {
    timeOfFlight = 0;
  }

  //  Lastly range
  a = 0;
  u = initialVelocity * Math.cos(angle);
  let t = timeOfFlight;
  let range = solve("s", { u, a, t });
  if (isNaN(range)) {
    range = 0;
  }
  return { maximumHeight, timeOfFlight, range };
}

function findFinalVelocity(angle, initialVelocity, time) {
  angle = degToRad(angle);
  let u = initialVelocity * Math.sin(angle);
  let a = -9.8;
  let t = time;
  let vVertical = solve("v", { u, a, t });
  let vHorizontal = initialVelocity * Math.cos(angle);
  let v = (vVertical ** 2 + vHorizontal ** 2) ** 0.5;
  return v.toFixed(2);
}

export { projectileInfo, findFinalVelocity, degToRad };
