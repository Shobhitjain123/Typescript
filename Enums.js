"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seatAlloted;
(function (seatAlloted) {
    seatAlloted["AISLE"] = "aisle";
    seatAlloted["MIDDLE"] = "middle";
    seatAlloted["WINDOW"] = "window";
})(seatAlloted || (seatAlloted = {}));
var newSeat = seatAlloted.AISLE;
var userResponse;
(function (userResponse) {
    userResponse["Yes"] = "yes";
    userResponse["No"] = "no";
})(userResponse || (userResponse = {}));
function response(username, message) {
    console.log("".concat(username, " response is ").concat(message));
}
response("Shobhit", userResponse.Yes);
