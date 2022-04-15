let names = prompt('Type your string!');

let namesArr = names.split(', ');

for (i in namesArr) {
  console.log(`<li>${++i} ${namesArr[--i]}</li>`);
}
