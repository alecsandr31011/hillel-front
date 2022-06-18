'use strict';

export function Row(obj) {
  this.getRow = function () {
    let tr = document.createElement('tr');
    let str = '';
    const keys = Object.keys(obj);
    for (const key of keys) {
      str += `<td>${obj[key]}</td>`;
    }
    tr.innerHTML = str;
    return tr;
  };
}
