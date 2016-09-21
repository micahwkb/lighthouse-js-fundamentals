var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0

//"while loop" - contents of the ingredients array

console.log("\nHere are the ingredients for some tasty chocolate chip banana bread:\n")
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}


//"for loop"

console.log("\nAnd again, this time using a 'for' statment\n");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// backwards using 'while'

var a = 1
console.log("\n...Now backwards!\n")
while (a <= ingredients.length) {
  console.log(ingredients[ingredients.length - a]);
  a++;
}

// backwards using 'for'

console.log("\n...Again, this time with more \"for\"!\n")

for (var a = 1; a <= ingredients.length; a++) {
  console.log(ingredients[ingredients.length -a]);


//thanks Lighthouse... now I'm hungry.
}