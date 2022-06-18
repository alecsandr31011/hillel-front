import { users } from './data';
import { Row } from './script';

function getTable(data) {
  const rows = [];

  for (const item of data) {
    const row = new Row(item);
    rows.push(row);
  }

  const main = document.querySelector('#main');
  const table = document.createElement('table');
  for (const row of rows) {
    table.appendChild(row.getRow());
  }
  main.appendChild(table);
}

getTable(users);
