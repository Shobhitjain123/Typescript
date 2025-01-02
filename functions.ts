function addTwo(num: number): number {
    return num + 2 // valid return type
    // return "hello" // invalid return type
}

function getUpper(name: string){
    return name.toUpperCase()
}

function signUpUser(name: string, email: string, isRegistered: boolean){

}

function loginUser(name: string, email: string, isLoggedIn: boolean = false ){

}

// function getVal(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["Thor", "superman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return hero
})

function consoleError(errMsg: string): void{
    console.log(errMsg);
}

function handleError(errMsg: string): never{
    throw new Error(errMsg)
};


loginUser("sj", "sj@sj.com")
signUpUser("Shobhit", "s@sj.com", false)
getUpper("Shobhit")
addTwo(5)





export {}