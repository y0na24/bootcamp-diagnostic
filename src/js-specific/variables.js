// 1.

const a = 5

{
  console.log(a) // ?
  
  const a = 10
}

// 2. 

function test() {
  console.log(a); // ?
  var a = 1;

  if (true) {
    var a = 2;
    let b = 3;
    const c = 4;
    console.log(a, b, c); // ?
  }

  console.log(a); // ?
  console.log(b); // ?
}
test();

// 3.

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100); // ?
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 100); // ?
}
