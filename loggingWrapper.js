
// (step 3) is run either by putting (volume(callback),"volume")  
// (step 3) is run either by putting (area(callback),"area")  
var wrapLog = function(callback, name) {
// (step 4) based on the name "if" condition we run the corresponding callback with 
// our original input "arguments" from logVolume and logArea by using "arguments[]"
  return function(){
    if (name === "area"){
       console.log(callback(arguments[0],arguments[1]));
    } else if (name === "volume"){
       console.log(callback(arguments[0],arguments[1],arguments[2]));
    } else {
       console.log("You returned an invalid function.");
    }
  }
};

var area = function (x, y) { 
  return x * y;
};
// (step 2) passes function with arguments and name 
var logArea = wrapLog(area, "area"); // in our function we input logArea as our callback
// (step1) this is logging our function 
logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6



var volume = function (x, y, z) {
  return x * y * z;
};
// (step 2) passes function with arguments and name 
var logVolume = wrapLog(volume, "volume");

// (step1) this is logging our function 
logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

// Create a function called wrapLog() that takes in a function (callback) 
// and a string (name) and returns a function that internally invokes (calls) callback 
// during its execution and also logs the name, input 
// parameters, and return value of the callback function. Following is a template with example usage.