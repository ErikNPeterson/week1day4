var words = ["ground", "control", "to", "major", "tom"];

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
  console.log(array.map(element => callback(element)))
}




