// Default Params
function registerUser(user = "Bot") {
  // Old way - before using `=`
  // if (!user) {
  //   user = 'Bot';
  // }

  return user + " is registered";
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "John",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "Sara",
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//object params
// function myDetails(user){
//   return `my name is ${user.name}and my matric number is ${matricno}`;

//   }
//   const user = {
//     name :"faridat",
//     matricno : 'u18cps1005',
// };
// console.log(myDetails(user))

//
// function good(hobbies) {
//   return `my hobbies are ${hobbies1} and i also love staying indoors and my address is ${address}`;
// }
// hobbies = [((hobbies1 = "dancin,acting and singing"), (address = "2/1"))];
// console.log(good(hobbies));
