class Person {
  constructor(name, age, option={address: "4 George drive"}) {
    this.name = name;
    this.age = age;
  }
}

Person.prototype.constructor = function () {
  console.log(name);
};
