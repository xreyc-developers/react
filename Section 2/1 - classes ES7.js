// ES6
class PersonA {
    constructor () {
        this.name = "Kezeah"
    }

    myMethod() {
        console.log(this.name);
    }
}

// ES7
class PersonB {
    name = "Kezeah";
    myMethod = () => {
        console.log(this.name);
    }
}