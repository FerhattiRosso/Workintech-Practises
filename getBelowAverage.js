function getBelowTheAverage(ratings) {
  let totalPoint = 0;
  const belowAverage = [];
  for (let i = 0; i < ratings.length; i++) {
    totalPoint += ratings[i].rate;
  }
  const average = totalPoint / ratings.length;
  for (k = 0; k < ratings.length; k++) {
    if (ratings[k].rate < average) {
      belowAverage.push(ratings[k].name);
    }
  }
  return belowAverage;
}
