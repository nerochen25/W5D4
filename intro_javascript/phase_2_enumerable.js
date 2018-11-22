//myEach function
// iterate through elements in arr
/* 
so for each element in the arr
callback to run some function on each element
*/
Array.prototype.myEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    // callback(this[i]);
    callback(this[i]);
  }
};

//myMap function
Array.prototype.myMap = function (callback) {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

//myReduce function
Array.prototype.myReduce = function(callback, initialValue) {
  let total;
  let pos = 0;
  if (initialValue) {
    total = initialValue;
  } else {
    total = this[0];
    pos = 1;
  }
  
  for (var i = pos; i < this.length; i++) {
    total = callback(total, this[i]);
  }
  return total;
};

// array.reduce do |acc, el|
//   acc -= el
// end

