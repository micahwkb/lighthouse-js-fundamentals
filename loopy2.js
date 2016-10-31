// A "loopy" function (-_-)

function loopyLighthouse(range, multiples, words) {
  var num = range[0];
  for (var i = range[0]; i <= range[1]; i++) {
    var text = "";
    if (num % multiples[0] === 0)
      text += words[0];
    if (num % multiples[1] === 0)
      text += words[1];
    console.log( text || i );
    num++;
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse([3, 120], [3, 8], ["happy", "HAPPY"]);