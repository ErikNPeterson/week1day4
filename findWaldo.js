// The second argument/parameter is expected to be a function
function findWaldo(inputArray, found) {
  inputArray.forEach((item, index) => {
    if (item === "Waldo") {
      found(index);   // execute callback
    }
  });   
}

function actionWhenFound(index) {
  console.log("Found him! He appeared at index " + index + " in your array");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);