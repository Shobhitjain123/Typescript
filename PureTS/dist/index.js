"use strict";
class User {
    constructor(email, name) {
        this.age = 10;
        this._courseContent = "TS";
        this.email = email;
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length > 10) {
            throw new Error("Name is too long");
        }
        else {
            this._name = newName;
        }
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    getCourceContent() {
        this._courseContent = "JS";
    }
}
const sj = new User("Test@test.com", "TestSJ");
sj.name = "Test1234567890";
//sj._courseContent = "JS" // Error Cannot access protected property outside of class or subclass
console.log(sj.name);
// Another way to define class
// class User {
//     constructor(public email: string, private name: string){
//     }    
// }
