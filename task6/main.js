'use strict';

function Row(obj) {
  this.name = obj.first_name === undefined ? 'Default' : obj.first_name;

  this.checkColor = function () {
    this.classList.toggle('checked');
  };

  this.getName = function () {
    alert(this.name);
  };

  this.getRow = function () {
    let tr = document.createElement('tr');
    let str = '';
    const keys = Object.keys(obj);
    for (const key of keys) {
      str += `<td>${obj[key]}</td>`;
    }
    tr.innerHTML = str;
    tr.onclick = this.checkColor;
    tr.ondblclick = this.getName.bind(this);
    return tr;
  };
}

function getTable(data) {
  let rows = [];

  for (const item of data) {
    const row = new Row(item);
    rows.push(row);
  }

  let main = document.querySelector('#main');
  let table = document.createElement('table');
  for (const row of rows) {
    table.appendChild(row.getRow());
  }
  main.appendChild(table);
}

getTable(users);
