/****************************************************
*                 Sorting an Array                  *
****************************************************/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sort-array").innerHTML = fruits;

function sortFunction() {
  fruits.sort();
  document.getElementById("sort-array").innerHTML = fruits;
}

/****************************************************
*                Reversing an Array                 *
****************************************************/
document.getElementById("reverse").innerHTML = fruits;

function reverseFunction() {
  fruits.sort();
  fruits.reverse();
  document.getElementById("reverse").innerHTML = fruits;
}

/****************************************************
*                   Numeric Sort                    *
****************************************************/
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("ascend").innerHTML = points;

function ascendFunction() {
  points.sort(function(a, b){return a - b});
  document.getElementById("ascend").innerHTML = points;
}

/****************************************************
*                The Compare Function               *
****************************************************/
document.getElementById("sort-a-n").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("sort-a-n").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a,b){return a - b});
  document.getElementById("sort-a-n").innerHTML = points;
}

/****************************************************
*          Sorting an Array in Random Order         *
****************************************************/
document.getElementById("random").innerHTML = points;

function randomFunction() {
  points.sort(function(a,b){return 0.5 - Math.random()});
  document.getElementById("random").innerHTML = points;
}

/****************************************************
*          Find the Highest (or Lowest) Value       *
****************************************************/
points.sort(function(a,b){return b-a});
document.getElementById("higest").innerHTML = points[0];

points.sort(function(a,b){return a-b});
document.getElementById("lowest").innerHTML = points[0];

/****************************************************
*          Find the Highest (or Lowest) Value       *
****************************************************/
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
]

displayCars();

function objectFunction() {
  cars.sort(function(a,b){return a.year -b.year});
  displayCars();
}

function displayCars() {
  document.getElementById("object-f").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}

displayCars()

function myFunction() {
  cars.sort(function(a,b) {
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return - 1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}
