// Function => callbacks, promise, assinc/await
//Callbacks
function printFunc(a) {
  console.log(typeof a);

  const sum = a(4, 3);
  console.log(sum);
}
function add(a, b) {
  return a + b;
}

printFunc(add);

// //setInterval setTimeout
function sayHello() {
  console.log("Hello");
}
//setTimeout(sayHello, 2000);
setInterval(sayHello, 2000);

console.log("Ager line");
setTimeout(sayHello, 2000);
console.log("Pore line");

// SYnchronous vs Asynchronous (Promise)
let takeOrder = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order taken");
      resolve();
    }, 2000);
  });
};

let processOrder = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order processed");
      resolve();
    }, 3000);
  });
};

let completeOrder = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order completed");
      resolve();
    }, 1000);
  });
};

takeOrder()
  .then(processOrder)
  .then(completeOrder)
  .then(() => {
    console.log("All done");
  })
  .catch(() => {
    console.log("Error occurd");
  });
