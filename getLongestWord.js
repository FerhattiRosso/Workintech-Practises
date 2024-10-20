function getLongestWord(str) {
  const elements = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < elements.length; i++) {
    let control = elements[i];
    let maxLength = control.length;
    if (maxLength > longestWord.length) {
      longestWord = elements[i];
    }
  }
  return longestWord;
}
