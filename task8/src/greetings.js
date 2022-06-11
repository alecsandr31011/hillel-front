function User(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return `My name is ${this.name}`;
  };
}

export function hello(name) {
  return `Hello ${name}!`;
}

export default User;
