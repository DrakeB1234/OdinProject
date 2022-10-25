const myModule = {
    name: 'Will',
    age: 34,
    sayName: function() {
        console.log(this.name);
    },
    setName: function(newName) {
        this.name = newName;
    }
};

myModule.sayName();