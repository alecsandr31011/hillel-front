'use strict';

function UserInfo(obj) {
  this.show = '&#8594';

  this.check = function () {
    let arrow = this.querySelector('.arrow');
    this.show = this.show === '&#8595' ? '&#8594' : '&#8595';
    arrow.innerHTML = `<p>${this.show}</p>`;
    let info = this.parentNode.querySelector('.info');
    info.classList.toggle('hidden');
  };

  this.getUser = function () {
    const user = document.createElement('div');

    const showInfo = document.createElement('div');
    showInfo.classList.add('switch');
    showInfo.onclick = this.check;
    showInfo.innerHTML = `
    <span><strong>${obj.name}</strong></span>
    <div class="arrow"><p>${this.show}</p></div>`;

    const info = document.createElement('div');
    info.classList.add('info');
    info.classList.add('hidden');
    info.innerHTML = `
    <div class="avatar"><p>Avatar</p></div>
    <div class="info-text">
      <div>
        <p><strong>inn: </strong> ${obj.inn}</p>
      </div>
      <div>
        <p><strong>name: </strong> ${obj.name}</p>
      </div>
      <div>
        <p><strong>age: </strong> ${obj.age}</p>
      </div>
    </div>
    <div class="info-text">
      <div>
        <p><strong>email: </strong> ${obj.email}</p>
      </div>
      <div>
        <p><strong>city: </strong> ${obj.city}</p>
      </div>
      <div>
        <p><strong>gender: </strong> ${obj.gender}</p>
      </div>
    </div>`;

    user.appendChild(showInfo);
    user.appendChild(info);
    return user;
  };
}

function getTable(data) {
  let main = document.querySelector('#main');

  for (const user of data) {
    const block = new UserInfo(user);
    main.appendChild(block.getUser());
  }
}
getTable(users);
