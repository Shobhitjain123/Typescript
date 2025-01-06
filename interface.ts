interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    startTrial: () => string,
    getCoupon(couponName: string, value: number): string
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "Admin" | "TA" | "Learner"
}


const userDetails: Admin = {
    dbId: 123,
    email: "test@test.com",
    userId: 222,
    githubToken: "github",
    role: "Admin",
    startTrial: () => {return "hello"},
    getCoupon: (name, off) => {return `${name} discount is ${off}`}
}

console.log(userDetails.startTrial());
console.log(userDetails.getCoupon("earlyBird", 10));
