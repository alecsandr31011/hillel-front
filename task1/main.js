let names = prompt('Type your string!');
let i = 1;
let res = `<li>${i++} `;

for (char of names) {
  if (char === ',') {
    res += '</li>';
    console.log(res);
    res = `<li>${i++}`;
  } else res += char;
}

res += `</li>`;
console.log(res);
