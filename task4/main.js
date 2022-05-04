'use strict';

function exponentiate(array, power) {
  let result = [];
  for (const item of array) {
    result.push(item ** power);
  }
  return result;
}

var res = exponentiate([2, 4, 3, 1], 2);

console.log(res);
