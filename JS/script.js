"use strict";

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 200
};

const jonh = Object.create(soldier);

// const jonh ={
//     health: 100
// };

// jonh._proto_= soldier;

Object.setPrototypeOf(jonh, soldier);

console.log(jonh.armor);