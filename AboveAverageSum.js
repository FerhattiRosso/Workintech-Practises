function aboveAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  let average = sum / array.length;
  let aboveAverage = 0;
  for (let k = 0; k < array.length; k++) {
    if (array[k] > average) {
      aboveAverage++;
    } else {
    }
  }
  return aboveAverage;
}
