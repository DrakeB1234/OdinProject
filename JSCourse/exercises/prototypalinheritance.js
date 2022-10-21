function apple(color, weight) {
    this.color = color;
    this.weight = weight;
}

apple.prototype = {
    eat(){ return "you eat the " + this.color + " colored apple" },
    throw(){ return "you throw the " + this.color + " colored apple" }
}

// all of these objects inherit the prototype
const apple1 = new apple("red", 23);
const apple2 = new apple("green", 12);
const apple3 = new apple("purple", 54);

console.log(apple1.eat());
console.log(apple3.throw());