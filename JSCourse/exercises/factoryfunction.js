const personFactory = (name, age) => {
    const sayHello = () => console.log("hello!");
    return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff);

jeff.sayHello();

// can create objects directly inline
const firstName = 'Joe';
const color = 'red';
const number = 23;
const food = 'rice';

console.log({ firstName, color, number, food }); // creates object directly in console log statement