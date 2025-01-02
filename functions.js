"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2; // valid return type
    // return "hello" // invalid return type
}
function getUpper(name) {
    return name.toUpperCase();
}
function signUpUser(name, email, isRegistered) {
}
function loginUser(name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
}
// function getVal(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["Thor", "superman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return hero;
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
;
loginUser("sj", "sj@sj.com");
signUpUser("Shobhit", "s@sj.com", false);
getUpper("Shobhit");
addTwo(5);
