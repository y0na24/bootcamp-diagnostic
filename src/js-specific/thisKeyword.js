// 1.

function foo() {
  console.log(this.name);
}

const obj = { name: "Frontend", foo };

obj.foo(); // ?
foo(); // ?

// 2.

const object = {
  name: "Alex",
  age: 30,
  company: "Google",
  logName: function () {
    console.log(this.name);
  },
  logAge: () => {
    console.log(this.age);
  },
  logCompany() {
    const log = () => {
      console.log(this.company);
    };

    log();
  },
};

obj.logName(); // ?
obj.logNameAgain(); // ?
obj.logCompany(); // ?

// 3. 

function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const user = { name: "Alice" };

greet.call(user, "Hello", "!");  // ?
greet.apply(user, ["Hi", "..."]); // ?
const bound = greet.bind(user, "Hey");
bound("?"); // ?



// 4.

class Counter {
  count = 0;

  inc() {
    this.count++;
    console.log(this.count);
  }
}

const c = new Counter();
const incFn = c.inc;

incFn(); // ?
c.inc(); // ?


// 5.

const multiplier = {
  factor: 2,
  multiply(arr) {
    return arr.map(function (el) {
      return el * this.factor;
    });
  }
};

console.log(multiplier.multiply([1, 2, 3])); // ?


