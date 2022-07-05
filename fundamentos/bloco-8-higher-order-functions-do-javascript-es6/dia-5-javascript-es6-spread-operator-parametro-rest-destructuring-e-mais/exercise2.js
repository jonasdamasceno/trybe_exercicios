const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 55, 66, 77, 88, 99, 100];

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

sum(...numbers);
console.log(sum(...numbers));
