//alert("JavaScript works!");

//Global Variables
var camper = "Mark A. Blaine";
var daysOff = 7;
var milesPerGallon = 15;
var dailyBudget = 250;

//JSON
var campsite = {
	type: "VIP", 	//Property String
	width: 10,		//Property Number
	depth: 20,
	showers: true	//Property Boolean
};

var bandsPlaying = [
		"Ludacris", 
		"The Shins", 
		"Phish"
	]; //Array

var stage = {
	big: "What",
	medium: "Which",
	small: "This",
	times: [90,60,30]	//Property Array
	
}

var food = {
	"pizza": "New York", //Local Variables
	"drink": "water",
	eat: function(){
		var meal = "Let\'s get some " + this.pizza + " pizza";
		return meal;
	},
	hydrate: function(){
		var guzzle = "Let's drink some " + this.drink;
		return guzzle;
	}
};

console.log(food.eat());
console.log(food.hydrate());