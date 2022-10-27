const counterCreator = () => {
    let count = 0;
    // return () => {
    //   console.log(count);
    //   count++;
    // };
    const counter = () => {
        print();
        count++;
    }

    const print = () => {
        console.log(count);
    }

    return counter;
  };
  
  const counter = counterCreator();
  
  counter(); 
  counter(); 
  counter(); 
  counter();