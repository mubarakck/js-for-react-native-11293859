function processArray(arr) {
    return arr.map(num => {
      if (num % 2 === 0) {
        return num * num; // if the number is an even number, it is squared and returned
      } else {
        return num * 3; // if the number is and odd number it is tripled and returned
      }
    });
  }
  //example code
 // const myArray = [1, 2, 3, 4, 5];
//const processedArray = processArray(myArray);
//console.log(processedArray); 
// Output: [3, 4, 9, 16, 15]

function formatArrayStrings(stringArray, numberArray) {
  return stringArray.map((str, index) => {
      if (numberArray[index] % 2 === 0) {
          return str.toUpperCase();
      } else {
          return str.toLowerCase();
      }
  });
}