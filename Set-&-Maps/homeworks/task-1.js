// #### Task 1

// Create class `DB` that will implement `CRUD` model.

// - As a data structure, use `Map`.
// - Implement the `create` method, which get an object as parameter and validates it; if object is invalid, 
// it generates an error.
// - The `create` method returns the ` id`.
// - When creating a user, generate a unique `id`, which is the key for the user object in the ` Map` structure.
// - The `read` method accepts the user id, if there is no such user to return ` null`, and if there is, return 
// the user object with the `id` field inside the object.
// - If you pass a non-string to the `read` method then generate an error.
// - If don't pass a parameter to the method `read` then generate an error.
// - The `readAll` method returns an array of users.
// - Generate an error if a parameter is passed to the `readAll` method.
// - The `update` method updates the user.
// - The `update` method takes 2 required parameters.
// - The `update` method generates an error if a non-existing ` id` is passed.
// - The `update` method generates an error if ` id` is passed with a type not a string.
// - The `update` method generates an error if the second parameter is not valid.
// - The method `delete` deletes the user.
// - Generate an error if passed to the `delete` method non-existent or invalid `id`.

class DB {
    constructor() {
        this.map = new Map()
        this.id = 0
    }
    checkObj(person){
        if(!person.hasOwnProperty('name') && person.name !== 'string'){
            throw new Error("person object should have property name which is string");
        }
        if(!person.hasOwnProperty('age') && person.age !== 'number'){
            throw new Error("person object should have property age which is number");
        }
        if(!person.hasOwnProperty('country') && person.country !== 'string'){
            throw new Error("person object should have property country which is string");
        }
        if(!person.hasOwnProperty('salary') && person.salary !== 'number'){
            throw new Error("person object should have property salary which is number");
        }
    }
    create(person) {
        this.checkObj(person);
        this.id++;
        this.map.set(this.id, person);
        return this.id;
        
    }
    read(id) {
        if(this.get.map(id)) return this.map.get(id);
        else return null;
    }
    readAll(...arg) {
        if(arg.length === 0){
            return this.map.values();
        }
        else{
            throw new Error;
        }
    }
    update(upObj) {
        if(upObj.hasOwnProperty('id')){
            if(typeof upObj.id === 'string'){
                throw new Error("er");
            }else if(Object.keys(upObj).length < 2){
                throw new Error("error");
            }else if(!this.map.get(upObj.id)){
                throw new Error("err");
            }else{
                Object.assign(this.map.get(upObj.id), upObj);
            }
        }
    }
    delete(id) {
        if(!this.map.get(upObj.id))
            throw new Error("err");
        this.map.delete(id);
    }
}
const db = new DB();
const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

db.create(person);
console.log(db.readAll());
db.update({id: 1, age: 20})
// console.log(db.read(1));
console.log(db.readAll());