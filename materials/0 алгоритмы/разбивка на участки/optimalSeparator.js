// TODO функция принимает длину и ширину участка и возвращает максимально большие квадратные участки

function optimalSeparator(length, width) {
  if (length % width === 0) {
    return [length / 2, width];
  }
  return optimalSeparator(width, length % width);
}

console.log(optimalSeparator(1680, 440)); // [80, 80]
