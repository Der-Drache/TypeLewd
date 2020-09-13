import { roundToPlaces } from '.';

interface Point {
  x: number;
  y: number;
}

/* linear bezier curve */

const calculateLinearBezierPoint = ([p0, p1]: number[], t: number): number => {
  return (1 - t) * p0 + t * p1;
}

const linearBezierPoint = ([p0, p1]: Point[], t: number): Point => {
  return {
    x: calculateLinearBezierPoint([p0.x, p1.x], t),
    y: calculateLinearBezierPoint([p0.y, p1.y], t),
  };
}

/* quadratic bezier curve */

const calculateQuadraticBezierPoint = ([p0, p1, p2]: number[], t: number): number => {
  return Math.pow(1 - t, 2) * p0 +
  (1 - t) * 2 * t * p1 +
  t * t * p2;
}

const quadraticBezierPoint = ([p0, p1, p2]: Point[], t: number): Point => {
  return {
    x: calculateQuadraticBezierPoint([p0.x, p1.x, p2.x], t),
    y: calculateQuadraticBezierPoint([p0.y, p1.y, p2.y], t),
  };
}

/* cubic bezier curve */

const calculateCubicBezierPoint = ([p0, p1, p2, p3]: number[], t: number): number => {
  return Math.pow(1 - t, 3) * p0 +
    Math.pow(1 - t, 2) * 3 * t * p1 +
    (1 - t) * 3 * t * t * p2 +
    t * t * t * p3;
}

export const cubicBezierPoint = ([p0, p1, p2, p3]: Point[], t: number): Point => {
  return {
    x: calculateCubicBezierPoint([p0.x, p1.x, p2.x, p3.x], t),
    y: calculateCubicBezierPoint([p0.y, p1.y, p2.y, p3.y], t),
  };
}

/* any degree bezier curve */

/**
 * recursive
 */
const calculateBezierPoint = (points: number[], t: number): number => {
  if (points.length === 1) {
    return points[0];
  }

  const p1 = calculateBezierPoint(points.slice(0, -1), t);
  const p2 = calculateBezierPoint(points.slice(1), t);
  return calculateLinearBezierPoint([p1, p2], t);
}

/**
 * recursive
 */
export const bezierPoint = (points: Point[], t: number): Point => {
  return {
    x: calculateBezierPoint(points.map(p => p.x), t),
    y: calculateBezierPoint(points.map(p => p.y), t),
  };
}

export const bezier = (...points: Point[]): Point[] => {
  const bezier: Point[] = [];
  let bezierCalculator: (points: Point[], t: number) => Point;

  switch (points.length) {
    case 2:
      bezierCalculator = linearBezierPoint;
      break;
    case 3:
      bezierCalculator = quadraticBezierPoint;
      break;
    case 4:
      bezierCalculator = cubicBezierPoint;
      break;

    default:
      bezierCalculator = bezierPoint;
      break;
  }

  for (let t = 0; t <= 1; t += 0.05) {
    bezier.push(bezierCalculator(points, roundToPlaces(t, 2)));
  }

  return bezier;
}
