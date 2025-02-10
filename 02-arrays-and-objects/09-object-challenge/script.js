// solution1
const library = [
  {
    title: "The Library",
    author: "Faridat",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "PHP",
    author: "Faridat",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "NODEJS",
    author: "Faridat",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
];
// solution2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
// console.log(libary);
// solution3
const { title: firstBook } = library[0];
console.log(firstBook);
// Convert to JSON string
const str = JSON.stringify(library);
console.log(str);
