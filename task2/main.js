let names = prompt('Type your string!');
let res = '';

for (let i = 0; i < names.length; i++) {
  if (names[i] === '<') {
    for (let k = i; k < names.length; k++) {
      if (names[k] === '>') {
        i = k;
        break;
      }
    }
  } else res += names[i];
}
console.log(res);
