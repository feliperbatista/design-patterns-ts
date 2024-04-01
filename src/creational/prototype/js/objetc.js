const personPrototype = {
  firstName: 'Felipe',
  lastName: 'Batista',
  age: 23,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Eduardo';
console.log(anotherPerson.fullName());
