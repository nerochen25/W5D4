// Bubblesort

Array.prototype.bubbleSort = function () {
  let sorted = false;
  
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      let j = i + 1;
      let first_el = this[i];
      let second_el = this[j];
      
      if (this[i] > this[j]) {
        this[i] = second_el;
        this[j] = first_el;
        sorted = false;
        break;
      }
    }
  }
  
  return this;
};

//substrings
String.prototype.subString = function() {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = 1; j <= this.length; j++) {
      let sub = this.slice(i,j);
      if (!result.includes(sub)) {
      result.push(sub); 
      }
    }
  }
  return result;
};