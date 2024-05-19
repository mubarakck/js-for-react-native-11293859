function processArray(arr) {
    return arr.map(num => {
      if (num % 2 === 0) {
        return num * num; // if the number is an even number, it is squared and returned
      } else {
        return num * 3; // if the number is and odd number it is tripled and returned
      }
    });
  }