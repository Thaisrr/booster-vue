const user = {
    name: 'toto',
    email: 'toto@mail.fr',
    age: 7000,
    password: 'password'
}

/*
const name = user.name;
const email = user.email;
const age = user.age;
*/

const {name, email, age, ...rest} = user;

console.log(name); // toto
console.log(rest); // { password: 'password' }

const userCopy = {...user}; // vrai copie

const fruits = ['pomme', 'coing', 'framboise', 'mangue', 'ananas'];
const [a, b, c, ... rest2] = fruits;
console.log(a); // pomme
console.log(rest2); // [mangue, ananas]

const fruitsCopy = [...fruits];