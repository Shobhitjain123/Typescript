class User {
    email: string
    name: string
    readonly age: number = 10
    
    constructor(email: string, name: string){
        this.email = email  
        this.name = name 
    }    
}

const sj = new User("Test@test.com", "test")


