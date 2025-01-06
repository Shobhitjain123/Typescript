let num: number | string = 22

num = 44
num = "asd"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let shobhit: User | Admin = {
    name: "shobhit", id: 123
}
shobhit = { username: "shobhit", id: 234 }


//  function getdbID(id : number | string) {
//     console.log(`DB ID is ${id}`);
//  }

getdbID(3)
getdbID("3")

function getdbID(id: number | string) {
    if (typeof id === 'string') {
        id.toUpperCase()
    }
}

//array
const data: number[] = [1, 2, 3]
const data1: string[] = ["thor", "spidey", "ironman"]

const data2: (string | number)[] = ["hero", "villan", 1, 2, 3] // Allows mix of numbers and strings in same array
const data3: string[] | number[] = ["hero", "villan"] // Allows all values either string only or all values number only

let seatAllocated: "Aisle" | "Middle" | "Window"

// seatAllocated = "crew" // invalid assignment
// seatAllocated = "Aisle" // valid assignment