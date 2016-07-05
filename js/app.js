var questions = [];
var ingredientList = [];
var pantry;
var preferences = {};
var count;
var drinkPrefs = $('#drink-prefs');
/*
var questionContainer = document.getElementById('question-container');
var questionText = document.getElementById('question-text');
var yesButton = document.getElementById('yes-button');
var noButton = document.getElementById('no-button');
var drinkContainer = document.getElementById('drink-container');
*/

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
  /*
  // Another way to make the ingredients list? Couldn't this just replace the pantry?
  new Ingredient('strong', ['rum', 'whiskey', 'gin']),
  new Ingredient('salty', ['olives', 'salt rim']),
  new Ingredient('bitter', ['bitters', 'tonic', 'lemon twist']),
  new Ingredient('sweet', ['simple syrup', 'honey', 'coke']),
  new Ingredient('fruity', ['orange slice', 'cassis', 'cherry'])
  */
  new Ingredient('strong', 'rum'),
  new Ingredient('strong', 'whiskey'),
  new Ingredient('strong', 'gin'),
  new Ingredient('salty', 'olives'),
  new Ingredient('salty', 'salt rim'),
  new Ingredient('bitter', 'bitters'),
  new Ingredient('bitter', 'tonic'),
  new Ingredient('bitter', 'lemon twist'),
  new Ingredient('sweet', 'simple syrup'),
  new Ingredient('sweet', 'honey'),
  new Ingredient('sweet', 'coke'),
  new Ingredient('fruity', 'orange slice'),
  new Ingredient('fruity', 'cassis'),
  new Ingredient('fruity', 'cherry')
];

// Pantry constructor
function Pantry(ingredients) {
  this.ingredients = ingredients;
}

// Pantry containing all ingredients
pantry = new Pantry(ingredientList);

// Populate list of drink options
function init() {
  for (var i = 0; i < questions.length; i++) {
    drinkPrefs.append('<input type="checkbox" id="box' + (i + 1) + '"/>' + questions[i].question + '<br/>');
  }
}

$(function() {
  init();
});

/*
// Events
document.addEventListener('DOMContentLoaded', function() {
  questionText.innerHTML += (questions[0].question);
});

yesButton.addEventListener('click', function() {
  count = 0;
  type = questions[count].type;
  preferences[type] = 'yes';
  console.log(preferences);
});

noButton.addEventlistener('click', function() {
  count = 0;

});
*/
