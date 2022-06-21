// Improve `DB` class from previous task.

// - Add a `find` method that will return an array of users that satisfy the condition passed as a parameter.
// - Generate an error if the `query` is not valid.
// - The fields `name` and` country` are looking for a 100% match.
// - The fields `age` and` salary` accept an object in which there must be either 2 parameters `min` 
// and` max` or at least one of them.
// - Return an empty array if it was not possible to find users that satisfy the request object.

// ```javascript

// const customers = db.find(query); // array of users

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
        if (!id || typeof id !== 'string') {
            throw new TypeError("id parameter shouldn't be a string");
        }else if(this.get.map(id)) return this.map.get(id);
        else return null;
    }
    readAll(...arg) {
        if(arg.length === 0){
            return this.map.values();
        }
        else{
            throw new Error("You can not assign a parameter to this method");
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
        if(!this.map.get(upObj.id)){
            throw new Error("err");
        }else{
            this.map.delete(id);
            return true;
        }
        
    }
    find(query){
        this.queryArr = [];
        for (const iterator of this.map.values()) {
            this.validator = true;
            if(iterator.country !== query.country){
                this.validator = false;
            }if(query.age.hasOwnProperty('min')){
                if(query.age.min > iterator.age){
                    this.validator = false;
                }
            }if(query.age.hasOwnProperty('max')){
                if(query.age.max < iterator.age){
                    this.validator = false;
                }
            }if(query.salary.hasOwnProperty('min')){
                if(query.salary.min > iterator.salary){
                    this.validator = false;
                }
            }if(query.salary.hasOwnProperty('max')){
                if(query.salary.max < iterator.salary){
                    this.validator = false;
                }
            }
            if(this.validator === true){
                this.queryArr.push(iterator);
            }
        }
        return this.queryArr;
    }
}
const db = new DB();
const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 700 // required field with type number
};
const person2 = {
    name: 'Zura', // required field with type string
    age: 51, // required field with type number
    country: 'ge', // required field with type string
    salary: 400 // required field with type number
};

db.create(person);
db.create(person2);

const query = {
    country: 'ge',
    age: {
        min: 20
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customers = db.find(query);
console.log(customers);

