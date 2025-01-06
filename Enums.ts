enum seatAlloted {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window"
}

let newSeat = seatAlloted.AISLE

enum userResponse {
    Yes = "yes",
    No = "no"
}

function response (username: string, message: userResponse){
    console.log(`${username} response is ${message}`)
}

response("Shobhit", userResponse.Yes)

export {}