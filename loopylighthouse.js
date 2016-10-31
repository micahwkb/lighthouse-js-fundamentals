//2nd version, shorter

var num = 100
for (var i = 0; i < 101; i++) {
  var text = ""
  if (num % 3 === 0)
    text += "Loopy";
  if (num % 4 === 0)
    text += "Lighthouse";
  console.log(text || num);
  num++;
}

// below is a long version I made first (also works)... doesn't use a "text" variable

/*
var num = 100

for (var i = 0; i < 101; i++) {
if (num % 4 === 0 && num % 3 === 0)
    console.log("LoopyLighthouse");
  else if (num % 3 === 0)
    console.log("Loopy");
  else if  (num % 4 === 0)
    console.log("Lighthouse");
  else if (num % 4 === 0 && num % 3 === 0)
    console.log("LoopyLighthouse");
  else console.log(num);
  num++;

*/
