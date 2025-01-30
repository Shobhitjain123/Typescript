let arr: [number, string, boolean] = [1, "hello", true]
// arr = [2, "Hello1", false, 234] // Invalid assignmentdue to an extraa element passed
arr.push("world") // Valid Operation
arr.pop() // Valid Operation
arr.pop() // Valid Operation
console.log(arr);

type User = [number, string]

let newUser: User
newUser = [1, ""]
