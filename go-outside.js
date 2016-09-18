/*
Why is there so much shouting in this example?
If I wanted a computer to yell at me a lot, I'd be using Windows.
*/

// var cold = true;


var raining = true;
var temperature = -41;

/*
Snow or rain?
*/
if (temperature <= 0 && raining === true) {
  console.log("It's snowing!");
} else if
  (temperature > 0 && raining === true)
  console.log("Don't forget your umbrella!");
  else if (!raining) {
  console.log("Leave your umbrella at home!");
}

/*
T-shirt weather?
*/
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.")
};

/*
Extreme weather?
*/
if (temperature < -40 || temperature > 40) {
  console.log("It's " + temperature + " ºC outside. Maybe going outside isn't such a great idea...");
} else {
  console.log("Now you're ready to go outside!");
};
