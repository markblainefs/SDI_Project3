//alert("JavaScript works!");

//Global Variables
var camper = "Mark A. Blaine";
var transportation = "plane";
var sleepingBaginSuitcase = true;
var thingsToDo = {
		bandsPlaying: [	//Array
		" Ludacris", 
		" The Shins", 
		" Phish"
		],
		shops: [
		"Moon Mats",
		"Bandana Fo Fana"
		]
	};
var startTime = 1800;
var totalWater = 0;
	
var howDoWeGetThere = function(vehicle,bag){			//Argument: String and Argument: Boolean
	if (vehicle === "car"){								//Conditional
		console.log("We are driving to Tennessee.");
	} else {
		console.log("We aren\'t driving to Bonnaroo.");
		if (bag){						//Nested Conditional
			console.log("I\'m glad my sleeping bag fit in my suitcase.");
		} else {
			console.log("I need to buy a sleeping bag when I get there.");
		};
	};
};	//end howDoWeGetThere (Back)

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
	hungry: false,  //Property: Boolean
	notHungry: "I\'m not hungry.",
	pizza: {		//Property: Object
		newYork: "pesto",
		chicago: "deep dish"
		}, 
	drink: "water",
	eatPizza: function(pizza){
		var meal = "Let\'s get some " + pizza + " pizza.";
		return meal;  //Return String
	},
	drinkWater: function(moreWater){	//Method: Mutator
		totalWater = moreWater + totalWater;
		return totalWater;  //Return Number
	},
	assessHunger: function(){
		if (this.hungry){
			return ("I\'m still hungry.  Let\'s eat!");
		} else {
			return this.notHungry;  //Return Object
		};
	}
};

var whoAndWhen = function(showStartTime,bandsToSee){	//Method: Function, Argument: Number, Array and Object
	lengthOfShow = 120;		//Local Variables
	numberOfShows = bandsToSee.length;  //Property: Array
	for (var show=0; show < numberOfShows; show++){	//For loop
		console.log("It\'s time to watch" + bandsToSee[show] + " at " + showStartTime + " hours.");
		showStartTime = showStartTime+lengthOfShow;
		console.log("I need to drink three bottles of water during every show.");
		var waterConsumed = 0,
			waterNeeded = 3;
		while (waterConsumed < waterNeeded) {	//While Loop, Nested Loop
			console.log("I've had " + waterConsumed + " bottles of water, but I need to drink " + waterNeeded + " so I will drink one more.");
			waterConsumed++;
		};
		totalWater = totalWater + waterConsumed;
	};
	return bandsToSee;	//Return Array
};

var travelHome = {
	mileage: 15,
	gallons: 20,
	milesToGo: 280,
	getGas: function() {
		var fillUp = (this.milesToGo > (this.mileage * this.gallons));
		return fillUp;  //Return Boolean
	}
};

howDoWeGetThere(transportation,sleepingBaginSuitcase);	//Method: Procedure, Argument: String, Argument: Boolean

//The following calls submit arguments and output returned values
console.log(whoAndWhen(startTime,thingsToDo.bandsPlaying) + " were a great line-up."); // Argument: Number, Argument: Array
console.log(food.eatPizza(food.pizza.newYork));  //Argument: Object
console.log("I\'ll drink 2 more bottles of water for a total of " + food.drinkWater(2));	//Argument: Number
console.log("Do we need to stop for gas? " + travelHome.getGas());
console.log(food.assessHunger());