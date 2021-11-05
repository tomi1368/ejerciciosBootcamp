class Persona{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    get nombre (){
        return this.name
    } 
}

const tom = new Persona("tomas",23)

console.log(tom.nombre)



console.log(tom)