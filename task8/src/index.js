import findSum from './findSum.js';
import time from './showTime.js';
import User, { hello } from './greetings.js';

const man = new User('Bob', 21);
console.log(man.getName());

console.log(hello('Alex'));
console.log(time());
console.log(findSum(1, 1 / 2, 3.4, 5));
