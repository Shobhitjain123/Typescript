class User {
    email: string
    private _name: string
    readonly age: number = 10
    protected _courseContent: string = "TS"

    constructor(email: string, name: string){
        this.email = email  
        this._name = name 
    }    

    get name(): string{
        return this._name;
    }

    set name(newName) {
        if(newName.length > 10){
            throw new Error("Name is too long")
        }else{
            this._name = newName
        }
    }
}

class SubUser extends User {
    isFamily: boolean = true

    getCourceContent(){
        this._courseContent = "JS"
    }
}


const sj = new User("Test@test.com", "TestSJ")
sj.name = "Test1234567890"
//sj._courseContent = "JS" // Error Cannot access protected property outside of class or subclass
console.log(sj.name)




// Another way to define class
// class User {
//     constructor(public email: string, private name: string){
        
//     }    
// }