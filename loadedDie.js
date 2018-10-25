function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var rollCount = -1;

  return function() {
    if(rollCount === list.length - 1){
      rollCount = 0;
      return list[rollCount];
    } else {
      rollCount += 1;
      return list[rollCount];
    }
    };
  
  }

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


// However, instead of a random die, we want to create a cheat die that would let us 
// predict the next number. Create a function called makeLoadedDie()
//  which returns a function that when called, seems to generate random numbers 
//  between 1 and 6, but in fact returns numbers in a row from a hardcoded list.