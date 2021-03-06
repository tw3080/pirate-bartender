var questions = [];
var ingredientList = [];
var pantry;
var preferences = {};
var count;
var drinkPrefs = $('#drink-prefs');
var makeDrinkBtn = $('#make-drink-btn');
/*
var questionContainer = document.getElementById('question-container');
var questionText = document.getElementById('question-text');
var yesButton = document.getElementById('yes-button');
var noButton = document.getElementById('no-button');
var drinkContainer = document.getElementById('drink-container');
*/

function Worker(name) {
  this.name = name;
  this.customers = [];
}

Worker.prototype.greet = function() {
  var known = false;
  var name = prompt("So, what's your name?");
  for (var i=0; i<this.customers.length; i++) {
    if (this.customers[i].name === name) {
      alert("Welcome back " + name);
      known = true;
      break;      
    } 
  }
  if (!known) {
    this.customers.push(new Customer(name));
  }
}

function Bartender(name, questions) {
  Worker.call(this, name);
  this.questions = questions;
}

Bartender.prototype = Object.create(Worker.prototype);
Bartender.prototype.constructor = Bartender;

Bartender.prototype.askQuestions = function() {
  // Code goes here
}

var bud = new Bartender('Bud', questions);

function Customer(name) {
  this.name = name;
  this.drink = "";
  this.burger = "";
}

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
  // Another way to make the ingredients list? Couldn't this just replace the pantry?
  new Ingredient('strong', ['rum', 'whiskey', 'gin']),
  new Ingredient('salty', ['olives', 'salt rim']),
  new Ingredient('bitter', ['bitters', 'tonic', 'lemon twist']),
  new Ingredient('sweet', ['simple syrup', 'honey', 'coke']),
  new Ingredient('fruity', ['orange slice', 'cassis', 'cherry'])
  /*
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
  */
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
  bud.greet();
  bud.greet();
  console.log(pantry);
});

// Events
makeDrinkBtn.on('click', function() {
  for (var i = 0; i < questions.length; i++) {
    if ($('#box' + (i + 1)).prop('checked')) {
      console.log('box' + (i + 1) + ' checked');
      preferences[questions[i].question] = true;
    } else {
      preferences[questions[i].question] = false;
    }
  }
  console.log(preferences);
  /*
  if ($('#box1').prop('checked')) {
    preferences.
    console.log('box1 checked');
  }
  if ($('#box2').prop('checked')) {
    console.log('box2 checked');
  }
  if ($('#box3').prop('checked')) {
    console.log('box3 checked');
  }
  if ($('#box4').prop('checked')) {
    console.log('box4 checked');
  }
  if ($('#box5').prop('checked')) {
    console.log('box5 checked');
  }
  */
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
