import Point from './Point.js';
import Segment from './Segment.js';

export default function reverse(segment) {
  const pointStart = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());
  const pointEnd = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());

  return new Segment(pointEnd, pointStart);
}

const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
const segment = new Segment(point1, point2);
const reversedSegment = reverse(segment);

// console.log('point1 = ', point1);
// console.log('point2 = ', point2);
// console.log('segment = ', segment);
// console.log('reversedSegment = ', reversedSegment);

// console.log(point2.getX()); // 11
// console.log(reversedSegment.getBeginPoint().getX()); // 11
