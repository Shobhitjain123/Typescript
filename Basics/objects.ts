const user = {
    name: "Shobhit",
    email: "sj@test.com",
    isActive: true
}


type UserData = {name: string; isActive: string}

function createUser({name, isActive} : UserData){
    return `${name} is ${isActive}`
}

let newUser = {name: "shobhit", isActive: "hello", email: "sj@test.com"}

const userData = createUser(newUser)
console.log(userData);


function createCourse(): {name: string, price: number} {
    let courseInfo = {name: "JS", price: 399, timeLimit: "20days"}
    return courseInfo
}

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive?: boolean
}

let myUser:User = {
    _id: "123",
    name: "Sj",
    email: "sj@test.com",
}

myUser.email = "test@test.com"
// myUser._id = "qwerty"

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

function userPayment(): cardDetails{
    return {cardDate: "cardDate", cardnumber: "cardnumber", cvv: 123}
}

export {}   