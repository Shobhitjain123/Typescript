var num = 22;
num = 44;
num = "asd";
var shobhit = {
    name: "shobhit", id: 123
};
shobhit = { username: "shobhit", id: 234 };
//  function getdbID(id : number | string) {
//     console.log(`DB ID is ${id}`);
//  }
getdbID(3);
getdbID("3");
function getdbID(id) {
    if (typeof id === 'string') {
        id.toUpperCase();
    }
}
//array
var data = [1, 2, 3];
var data1 = ["thor", "spidey", "ironman"];
var data2 = ["hero", "villan", 1, 2, 3]; // Allows mix of numbers and strings in same array
var data3 = ["hero", "villan"]; // Allows all values either string only or all values number only
var seatAllocated;
// seatAllocated = "crew" // invalid assignment
// seatAllocated = "Aisle" // valid assignment
