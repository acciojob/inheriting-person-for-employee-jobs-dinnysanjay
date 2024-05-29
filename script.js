// complete this js code
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Define the Employee class, inheriting from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // Method to greet with job title
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Test functions
function testPerson() {
  const alice = new Person("Alice", 25);
  alice.greet(); // Output: Hello, my name is Alice, I am 25 years old.
}

function testEmployee() {
  const bob = new Employee("Bob", 30, "Manager");
  bob.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
}



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
