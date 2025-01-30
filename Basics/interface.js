var userDetails = {
    dbId: 123,
    email: "test@test.com",
    userId: 222,
    githubToken: "github",
    startTrial: function () { return "hello"; },
    getCoupon: function (name, off) { return "".concat(name, " discount is ").concat(off); }
};
console.log(userDetails.startTrial());
console.log(userDetails.getCoupon("earlyBird", 10));
