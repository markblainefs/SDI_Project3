//alert("JavaScript works!");

//JSON
var campsite = {
	"type": "VIP",
	"width": 10,
	"depth": 20,
	"showers": true
};

var food = {
	"pizza": "New York",
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