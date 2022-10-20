const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      console.log("You have" + this.otherProperty + "properties!");
   },
   yeay: function() {
    console.log("You have" + this.otherProperty + "properties!");
 }
  }

// dot notation for getting value from object
console.log(myObject.property);

// this doesnt work due to space in the name of function
// myObject."obnoxious property"

// bracket notation
console.log(myObject["otherProperty"]);

// bracket notation function
myObject["obnoxious property"];
myObject.yeay;