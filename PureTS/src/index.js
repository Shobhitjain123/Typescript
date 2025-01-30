var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
    }
    return User;
}());
var sj = new User("Sj@test", "Shobhit");
console.log(sj.email);
sj.age = 30;
console.log(sj.age);
console.log(sj.name);
