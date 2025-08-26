// 1.

console.log("1");

const p = new Promise((resolve, reject) => {
  console.log("2");
  if (true) resolve("name 1");
});

setTimeout(() => console.log("3"), 2000);

p.then((name) => {
  console.log(name);
  setTimeout(() => console.log(name + ".2"), 500);
});

console.log("5");

// Ответ:

// 2.

Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "с")
  .then((p) => p + "d")
  .then((p) => console.log(p));

console.log("f");

// Что выведет в консоль?
