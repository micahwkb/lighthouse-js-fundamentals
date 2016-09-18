function countChar(string, char) {
  var count = 0;
  for (var n = 0; n < string.length; n++)
    if (string.charAt(n) == char)
     count += 1;
    return count;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4