// private function (access only by calling it)
const counterCreator = () => {
    // private variable (access only by calling function)
    let counter = 0;
    return () => {
        counter++;
        console.log(counter);
    };
};

const counter = counterCreator();

counter();
counter();
counter();
counter();