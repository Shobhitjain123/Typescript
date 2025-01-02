// const user = {
//     name: "Shobhit",
//     email: "sj@test.com",
//     isActive: true
// }

function createUser({name, isActive} : {name: string, isActive: string}){
    return `${name} is ${isActive}`
}

let newUser = {name: "shobhit", isActive: "hello", email: "sj@test.com"}

const userData = createUser(newUser)
console.log(userData);

export {}   