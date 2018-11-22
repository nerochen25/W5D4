//uniq function

Array.prototype.uniq = function () {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

//twoSum function

Array.prototype.twoSum = function () {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < i; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  
  return result;
};

//transpose function
//[[1,2,3], [4,5,6]] => [[1,2], [3,4], [5,6]]
Array.prototype.transpose = function () {
  let result = [];
  let size = this[0].length; //3
  for (var i = 0; i < size; i++) {
    let temp = [];
    for (var j = 0; j < this.length; j++) {
      temp.push(this[j][i]);
    }
    result.push(temp);
  }
  return result;
};

//myEach function
// iterate through elements in arr
/* 
so for each element in the arr
callback to run some function on each element
*/
Array.prototype.myEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};



