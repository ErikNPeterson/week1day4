var words = ["ground", "control", "to", "major", "tom"];




// these are calling the map function above // these are not the (map)method.

map(words, function(word) { // words is our array at the top
  return word.length; // function(word) is sent to callback 
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(array, callback){
  var newArray =[];
  array.forEach(element => {
  newArray.push(callback(element)); // think about using map to make the new array
  });
 console.log(newArray);
}
