const Car = function(type, color, real){
    this.type = type;
    this.color = color;
    this.real = real;
}

Car.prototype = {
    getType(){
        return this.type;
    },
    getColor(){
        return this.color;
    },
    getReal(){
        if (this.real == true){
            return "this car is real";
        }
        return "this car is a toy";
    }
};

const ToyCar = function(type, color, real){
    this.type = type;
    this.color = color;
    this.real = real;
}

ToyCar.prototype = Object.create(Car.prototype);

const car1 = new Car("Sedan", "Red", true);

console.log("Type: ", car1.getType(), " Color: ", car1.getColor(), " Real: ", car1.getReal());

const car2 = new ToyCar("Truck", "Green", false);

console.log("Type: ", car2.getType(), " Color: ", car2.getColor(), " Real: ", car2.getReal());