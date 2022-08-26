

// // Simple JavaScript console.log statement
// function printHello() {
//     console.log("Hello there!");
//   }

// // Takes two numbers and adds them
// function addition(a, b) {
//     return a + b;
//   }

// // Functions can call other functions
// function doubleAddition(c, d) {
//     var total = addition(c, d) * 2;
//     return total;
//   }

// 11.3.3

// The arrow function collapses the function from 3 lines to 1 line, which is a significant reduction in characters.
// The function keyword is not part of the arrow function. This is because the arrow symbol (=>) indicates that this block (or line) of code is a function.
// The return keyword and console.log() are removed because with this new syntax, JavaScript inherently knows what will be returned.

// function printHello() {
//   return "Hello there!";
// }
// printHello = () => "Hello there!";

// function addition(a, b) {
//   return a + b;
// }
// addition = (a, b) => a + b;

// Original doubleAddition function
// function doubleAddition(c, d) {
//   var total = addition(c, d) * 2;
//   return total;
// }
// Standard syntax: 
// the name of the function, 
// an equals sign, 
// and then the parameters.
// add the fat arrow followed by the argument. 
// In this case, the argument is the second function.
// doubleAddition = (c, d) => addition(c, d) * 2;

// 11.4.1
// let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
// function listLoop(userList) {
//   for (var i = 0; i < userList.length; i++) {
//     console.log(userList[i]);
//   }
// }
//  to run in console: listLoop(friends);
// var i = 0 We assign an iterable variable and set its value to zero. In this loop, think of the letter 'i' to mean 'iterate.' When we assign a zero value, we're starting a counter from the beginning. You can also think of it in terms of list comprehension–the first name of the list has an index value of zero, for example.
// i < userList.length; Here we're basically saying, "If this iterable (i) is still smaller than the total number of iterables in the list (userList), then move on to the next step."
// So if we're on the second name, but the list is four names long, the for loop will continue to loop through it.
// The final step, i++, increases the iterable by 1. We're using list comprehension here; the for loop knows to iterate to the next name because the index number has increased by 1.

// 11.4.2
// let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
// for (var i = 0; i < vegetables.length; i++) {
//   console.log("I love " + vegetables[i]);
// }

// loop through numbers without using an array.

// for (var i = 0; i < 5; i++) {
//    console.log("I am " + i);
// }

// 11.5.1

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");




function buildTable(data) {

  // tbody.html("");  —-> tells JavaScript 
  // to use an empty string when creating the table; 
  // in other words, create a blank canvas. 
  // This is a standard way to clear data.
  tbody.html("");

  // 11.5.2
  // This time, we'll use a forEach function, 
  // which loops through the array in the same way 
  // as a for loop. The difference is that 
  // forEach works only with arrays. Another 
  // benefit is that forEach can be combined 
  // with an arrow function, once again making 
  // the code more concise and easy to read.
  data.forEach((dataRow) => {
    
    // tells JavaScript to find the <tbody> tag 
    // within the HTML and add a table row ("tr").
    let row = tbody.append("tr");

    // We're already working with an array of objects, 
    // where each object is a UFO sighting. By starting 
    // our line of code with Object.values, we're telling 
    // JavaScript to reference one object from the array 
    // of UFO sightings. By adding (dataRow) as the argument, 
    // we are saying that we want the values to go into 
    // the dataRow. We've added forEach((val) to specify 
    // that we want one object per row.
    Object.values(dataRow).forEach((val) => {

      // Append each value of the object to a cell in the table. 
      // Create a variable to append data to a table.
      let cell = row.append("td");

      // When we chain .text(value) to the variable, 
      // we are extracting only the text of the value.
      // Not the key or the key/value pair.
      cell.text(val);
      }
    );
  });
}





