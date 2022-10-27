// const counterCreator = () => {
//     let count = 0;
//     // return () => {
//     //   console.log(count);
//     //   count++;
//     // };
//     const counter = () => {
//         print();
//         count++;
//     }

//     const print = () => {
//         console.log(count);
//     }

//     return counter;
//   };
  
//   const counter = counterCreator();
  
//   counter(); 
//   counter(); 
//   counter(); 
//   counter();

const factoryFunction = (name, age) => {
    return { name, age };
};

let name = [];

name.push(factoryFunction('joey', 12));
name.push(factoryFunction('mark', 34));
name.push(factoryFunction('hailey', 122));

name.forEach((e) => {
    console.log(e);
});