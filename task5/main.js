'use strict';

function sort(array) {
  let result = [];
  const lastElement = array.length - 1;
  for (const i in array) {
    result.push(array[lastElement - i]);
  }
  return result;
}

var res = sort(['a', 'b', 'c']);

console.log(res);
