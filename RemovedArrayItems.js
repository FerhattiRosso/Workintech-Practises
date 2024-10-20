function removeItems(array) {
  let uzunluk = array.length;
  if (uzunluk <= 4) {
    return [];
  } else {
    let newArray = array.slice(2, -2);
    if (newArray.length % 2 === 1) {
      let middleIndex = Math.floor(newArray.length / 2);
      newArray.splice(middleIndex, 1);
      return newArray;
    } else {
      return newArray;
    }
  }
}
