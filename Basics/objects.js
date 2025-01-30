"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Shobhit",
    email: "sj@test.com",
    isActive: true
};
function createUser(_a) {
    var name = _a.name, isActive = _a.isActive;
    return "".concat(name, " is ").concat(isActive);
}
var newUser = { name: "shobhit", isActive: "hello", email: "sj@test.com" };
var userData = createUser(newUser);
console.log(userData);
function createCourse() {
    var courseInfo = { name: "JS", price: 399, timeLimit: "20days" };
    return courseInfo;
}
var myUser = {
    _id: "123",
    name: "Sj",
    email: "sj@test.com",
};
myUser.email = "test@test.com";
function userPayment() {
    return { cardDate: "cardDate", cardnumber: "cardnumber", cvv: 123 };
}
