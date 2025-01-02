"use strict";
// const user = {
//     name: "Shobhit",
//     email: "sj@test.com",
//     isActive: true
// }
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name, isActive = _a.isActive;
    return "".concat(name, " is ").concat(isActive);
}
var userData = createUser({ name: "shobhit", isActive: "hello" });
console.log(userData);
