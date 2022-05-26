function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

export default function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}
