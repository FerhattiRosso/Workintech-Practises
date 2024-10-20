function countOfChar(str, char) {
  let charCount = 0;
  const newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    if (newStr.charAt(i) === char) {
      charCount++;
    } else {
    }
  }
  return charCount;
}
