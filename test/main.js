var listNames = document.querySelector('#names');

console.log(listNames);

var names = ['alex', 'bob', 'mark', 'ann'];

var html = '';

for (var username of names) {
  html += `<li>${username}</li>`;
}

listNames.innerHTML = html;

var user = {
  name: 'Alex',
  age: 23,
  isOpen: true,
};

console.log(user.age);
