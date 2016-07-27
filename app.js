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
