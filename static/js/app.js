

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

// 11.5.3, 11.5.4
// Data-Driven Documents (D3 for short) is a 
// JavaScript library that adds interactive 
// functionality, such as when users click a 
// button to filter a table. It works by 
// "listening" for events, such as a button click, 
// then reacts according to the code we've created.




function handleClick() {

  // The .select() function is a very common one 
  // used in D3. It will select the very first 
  // element that matches our selector string: 
  // "#datetime". The selector string is the 
  // item we're telling D3.js to look for.
  // With d3.select("#datetime"), for example, 
  // we're telling D3 to look for the #datetime id 
  // in the HTML tags. We haven't created our HTML 
  // yet, but we know that the date value will be 
  // nested within tags that have an id of "datetime."
  // By chaining .property("value"); to the d3.select 
  // function, we're telling D3 not only to look for 
  // where our date values are stored on the webpage, 
  // but to actually grab that information and hold it 
  // in the "date" variable.
  let date = d3.select("#datetime").property("value");

  // Now we need to set a default filter and save it 
  // to a new variable. Our default filter will actually 
  // be the original table data because we want users 
  // to refine their search on their own terms. Let's 
  // add the new variable on the next line.
  // Here's a variable we haven't seen in a while: 
  // tableData. This is the original data as imported 
  // from our data.js file. By setting the filteredData 
  // variable to our raw data, we're basically using it 
  // as a blank slate. The function we're working on 
  // right now will be run each time the filter button 
  // is clicked on the website. If no date has been 
  // entered as a filter, then all of the data will be 
  // returned instead.
  let filteredData = tableData;

  // syntax for the .filter() method: 
  // row => row.datetime === date);. 
  // This line is what applies the filter 
  // to the table data. It's basically saying, 
  // "Show only the rows where the date is equal 
  // to the date filter we created above." 
  // The triple equal signs test for equality, 
  // meaning that the date in the table has to 
  // match our filter exactly.
  // There are two ways to test for equality 
  // in JavaScript: == and ===. 
  // While they look similar, there are differences. 
  // A triple equal sign (===) is checking for 
  // strict equality. This means that the 
  // type and value have to match perfectly.
  // A double equals sign (==) is checking for 
  // loose equality. This means that the 
  // type and value are loosely matched. 
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  // We are passing in our filteredData variable as our 
  // argument so that only the data that matches the 
  // filter is displayed.
  buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);


