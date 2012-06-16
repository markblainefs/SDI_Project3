//alert("JavaScript works!");

//Global Variables
var camper = "Mark A. Blaine";
var daysOff = 7;
var milesPerGallon = 15;
var dailyBudget = 250;
var transportation = "plane";
var sleepingBaginSuitcase = true;
var bandsPlaying = [	//Array
		" Ludacris", 
		" The Shins", 
		" Phish"
	];
var startTime = 1800;
	
var howDoWeGetThere = function(vehicle){
	if (vehicle === "car"){								//Conditional
		console.log("We are driving to Tennessee");
	} else {
		console.log("We aren\'t driving to Bonnaroo");
		if (sleepingBaginSuitcase){						//Nested Conditional
			console.log("I\'m glad my sleeping bag fit in my suitcase.");
		} else {
			console.log("I need to buy a sleeping bag when I get there.");
		};
	};
};	//end howDoWeGetThere

//JSON
var campsite = {
	level: "VIP", 	//Property: String
	location: "Shakedown Street",
	type: {
		ground: "grass",
		details: {
			width: 10,		//Property: Number
			depth: 20,
			electric: true,
			parking: "single car"
		},
	},
	showers: true	//Property: Boolean
};

var stage = {
	big: "What",	//Local Variables
	medium: "Which",
	small: "This",
	times: [90,60,30]	//Property: Array
}

var food = {
	pizza: {		//Property: Object
		newYork: "pesto",
		chicago: "deep dish"
		}, 
	drink: "water",
	eat: function(){
		var meal = "Let\'s get some " + this.pizza.newYork + " pizza";
		return meal;
	},
	hydrate: function(){
		var guzzle = "Let's drink some " + this.drink;
		return guzzle;
	}
};

var whoAndWhen = function(showStartTime,bandsToSee){	//Method: Function
	lengthOfShow = 120;
	numberOfShows = bandsToSee.length;
	for (var show=0; show < numberOfShows; show++){	//For loop
		console.log("We'll watch" + bandsToSee[show] + " at " + showStartTime + " hours");
		showStartTime = showStartTime+lengthOfShow;
	};
	return bandsToSee;	//Return Array
}

howDoWeGetThere(transportation);	//Method: Procedure, Argument: String
//The following calls submit arguments and output returned values
console.log(food.eat());
console.log(food.hydrate());
console.log(whoAndWhen(startTime,bandsPlaying) + " will be a great line-up"); // Argument: Number, Argument: Array

//for (var key in campsite) {
//	console.log("Key: " + campsite[key])
//}