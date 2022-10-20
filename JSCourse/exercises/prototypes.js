function User(email, name){
    this.email = email,
    this.name = name,
    this.online = false;
}

// methods in objects with prototype

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, "has logged in!");
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, "has logged out!");
}


var userOne = new User ("yeahyeah@gmail.com", "Yeah");
var userTwo = new User ("NoNo@gmail.com", "Nope");

console.log(userOne);
userTwo.login();
userOne.logout();

