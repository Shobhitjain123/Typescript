// Case1
// If we have to pass multiple types of data to a function , we can use Or operator
function identity(val : boolean | number) : boolean | number {
    return val
}

// Case 2
// We can use any keywork to pass any type to data to the function

function identity1(val : any) : any {
    return val
} // This is not a good practice, Because we are not specifying the type of data we are passing to the function and Argument type and return type could be anything

// Case3
// We can use generics to pass any type of data to the function
function identity2<T>(val : T) : T {
    return val
} // This is a good practice, Because we are specifying the type of data we are passing to the function and Argument type and return type will be always be same

identity2("Hello")

interface Sports {
    name: string;
    duration: number;
}

identity2<Sports>({name: "Cricket", duration: 5})