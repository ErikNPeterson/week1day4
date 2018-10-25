// var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// var evens = numbers.filter(function(num) {
//   return (num % 2 == 0);
// });
// console.log("Subset of even numbers:", evens);


// array Mapping challenge

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map((item) => {
  var {x: value1 , y: value2} = item // destructures the item
  // console.log (x,y)
  return Math.sqrt(Math.pow(value1, 2) + Math.pow(value2, 2))
  }
);


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);



