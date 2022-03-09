function solve(unknown, known) {
  // Unknown is a string
  // Known is an object of known paramters
  let v = known.v;
  let u = known.u;
  let a = known.a;
  let t = known.t;
  let s = known.s;

  if (unknown === "v") {
    // To solve for v
    let result;
    if (
      typeof u === "number" &&
      typeof a === "number" &&
      typeof t === "number"
    ) {
      result = u + a * t;
    } else if (
      typeof u === "number" &&
      typeof a === "number" &&
      typeof s === "number"
    ) {
      result = Math.sqrt(u ** 2 + 2 * a * s);
    } else if (
      typeof u === "number" &&
      typeof s === "number" &&
      typeof t === "number"
    ) {
      let a = (2 * (s - u * t)) / t ** 2;
      result = u + a * t;
    } else if (
      typeof a === "number" &&
      typeof s === "number" &&
      typeof t === "number"
    ) {
      let u = (s - 0.5 * a * t ** 2) / t;
      result = u + a * t;
    } else {
      result = 0;
    }
    return result;
  } else if (unknown === "u") {
    let result;
    if (
      typeof v === "number" &&
      typeof a === "number" &&
      typeof t === "number"
    ) {
      result = v - a * t;
    } else if (
      typeof v === "number" &&
      typeof a === "number" &&
      typeof s === "number"
    ) {
      result = Math.sqrt(v ** 2 - 2 * a * s);
    } else if (
      typeof v === "number" &&
      typeof s === "number" &&
      typeof t === "number"
    ) {
      result = (2 * s) / t - v;
    } else if (
      typeof a === "number" &&
      typeof s === "number" &&
      typeof t === "number"
    ) {
      result = (s - 0.5 * a * t ** 2) / t;
    } else {
      result = 0;
    }
    return result;
  } else if (unknown === "a") {
    let result;
    if (
      typeof v === "number" &&
      typeof u === "number" &&
      typeof t === "number"
    ) {
      result = (v - u) / t;
    } else if (
      typeof v === "number" &&
      typeof u === "number" &&
      typeof s === "number"
    ) {
      result = (v ** 2 - u ** 2) / (2 * s);
    } else if (
      typeof v === "number" &&
      typeof s === "number" &&
      typeof t === "number"
    ) {
      let u = (2 * s) / t - v;
      result = (v - u) / t;
    } else if (
      typeof u === "number" &&
      typeof s === "number" &&
      typeof t === "number"
    ) {
      result = (2 * (s - u * t)) / t ** 2;
    } else {
      result = 0;
    }
    return result;
  } else if (unknown === "t") {
    let result;
    if (
      typeof v === "number" &&
      typeof u === "number" &&
      typeof a === "number"
    ) {
      result = (v - u) / a;
    } else if (
      typeof v === "number" &&
      typeof u === "number" &&
      typeof s === "number"
    ) {
      result = (2 * s) / (u + v);
    } else if (
      typeof s === "number" &&
      typeof a === "number" &&
      typeof u === "number"
    ) {
      let v = Math.sqrt(u ** 2 + 2 * a * s);
      result = (v - u) / a;
    } else if (
      typeof s === "number" &&
      typeof a === "number" &&
      typeof v === "number"
    ) {
      let u = Math.sqrt(v ** 2 - 2 * a * s);
      result = (v - u) / a;
    } else {
      result = 0;
    }
    return result;
  } else if (unknown === "s") {
    let result;
    if (
      typeof v === "number" &&
      typeof u === "number" &&
      typeof a === "number"
    ) {
      result = (v ** 2 - u ** 2) / (2 * a);
    } else if (
      typeof v === "number" &&
      typeof u === "number" &&
      typeof t === "number"
    ) {
      result = ((u + v) / 2) * t;
    } else if (
      typeof t === "number" &&
      typeof a === "number" &&
      typeof u === "number"
    ) {
      result = u * t + 0.5 * a * t ** 2;
    } else if (
      typeof t === "number" &&
      typeof a === "number" &&
      typeof v === "number"
    ) {
      let u = v - a * t;
      result = u * t + 0.5 * a * t ** 2;
    } else {
      result = 0;
    }
    return result;
  }
}

export default solve;
