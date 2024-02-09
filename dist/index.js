"use strict";
console.log('hello typescript 123 ');
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
const visitor = {
    type: 'user',
    username: 'jhonathan',
    email: 'jhonathan@mail.com',
    id: 1
};
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
logDetails(visitor);
