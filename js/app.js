var questions = [];
var ingredientList = [];
var preferences = {};
var count;
var drinkPrefs = $('#drink-prefs');
var makeDrinkBtn = $('#make-drink-btn');

// Question constructor
function Question(type, question) {
  this.type = type;
  this.question = question;
}

// List of questions
questions = [
  new Question('strong', 'Strong'),
  new Question('salty', 'Salty'),
  new Question('bitter', 'Bitter'),
  new Question('sweet', 'Sweet'),
  new Question('fruity', 'Fruity')
];

// Ingredient constructor
function Ingredient(type, name) {
  this.type = type;
  this.name = name;
}

// List of ingredients
ingredientList = [
  new Ingredient('strong', ['rum', 'whiskey', 'gin']),
  new Ingredient('salty', ['olives', 'salt rim', 'celery salt']),
  new Ingredient('bitter', ['bitters', 'tonic', 'lemon twist']),
  new Ingredient('sweet', ['simple syrup', 'honey', 'coke']),
  new Ingredient('fruity', ['orange slice', 'cassis', 'cherry'])
];

// Pantry constructor
function Pantry(ingredients) {
  this.ingredients = ingredients;
}

Pantry.prototype.getRandom = function(i) {
  var numIngredients = this.ingredients[i].name.length;
  var random = Math.floor(Math.random() * numIngredients);

  console.log(numIngredients);
};

// Bartender constructor
function Bartender(questions) {
  this.questions = questions;
}

// Populate list of drink options
Bartender.prototype.askQuestions = function() {
  for (var i = 0; i < questions.length; i++) {
    drinkPrefs.append('<input type="checkbox" id="box' + (i + 1) + '"/>' + questions[i].question + '<br/>');
  }
};

// Get the user's drink type preferences based on which flavor boxes are checked
Bartender.prototype.getPreferences = function() {
  for (var i = 0; i < questions.length; i++) {
    if ($('#box' + (i + 1)).prop('checked')) {
      // console.log('box' + (i + 1) + ' checked');
      preferences[questions[i].question] = true;
    } else {
      preferences[questions[i].question] = false;
    }
  }
  console.log(preferences);
};

// Construct a drink made up of random ingredients from the user's preferences
Bartender.prototype.makeDrink = function(preferences) {
  for (var prop in preferences) {
    if (preferences[prop]) {
      console.log(preferences[prop]);
    } else {
      console.log(preferences[prop]);
    }
  }
};

// Initialize bartender
var bartender = new Bartender(questions);

// Pantry containing all ingredients
var pantry = new Pantry(ingredientList);

// Events
makeDrinkBtn.on('click', function() {
  bartender.getPreferences();
  bartender.makeDrink(preferences);
});

// Execute on load
$(function() {
  // makeDrinkTry();
  // console.log(pantry.ingredients[0].type);
  // console.log(pantry.ingredients[0].name);
  bartender.askQuestions();
});

// NOT REALLY USING THESE METHODS RIGHT NOW
/*
// Testing functionality of getRandom()
function makeDrinkTry() {
  for (var i = 0; i < questions.length; i++) {
    pantry.getRandom(i);
  }
}

// Populate list of drink options
function init() {
  for (var i = 0; i < questions.length; i++) {
    drinkPrefs.append('<input type="checkbox" id="box' + (i + 1) + '"/>' + questions[i].question + '<br/>');
  }
}
*/
