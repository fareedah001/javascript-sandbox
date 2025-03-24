// function first() {
//   var a = 1;
//   var b = 2;

//   function second() {
//     var b = 3;
//     var c = 4;

//     console.log(a, b, c);
//   }

//   second();
//   console.log(a, b);
// }

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y);

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  console.log(y);
}
