// // Array spread

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// const newNumbers1 = [numbers, 4];

// console.log(newNumbers);
// console.log(newNumbers1);

// // Object spread

// const person = {
//     name: 'Max'
// };

// const newPerson = {
//     ...person,
//     age: 28
// }

// console.log(newPerson);

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));