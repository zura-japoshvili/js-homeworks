// #### Task 1

// Implement the class **Validator**, for validating strings. This class has next methods:

// - method **isEmail** that gets string as parameter and validate is it correct email or not. 
//     If it's ok, return true, otherwise false
// - method **isDomain** for domain validating
// - method **isDate** for date validation
// - method **isPhone** for phone validation

// - use Regexp for simpler validation

// Example:

// ```javascript
// var validator = new Validator();

// console.log(validator.isEmail('jshtml@mail.ru'));
// console.log(validator.isDomain('jshtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country

class Validator {
    #emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    isEmail(email){
        this.email = email;
        if(typeof email !== 'string') throw new TypeError("Passd parameters should be a string");


        if(this.#emailRegex.test(email)) {
            return true;
        }
            return false;

    }
    isDomain(domain){
        this.domain = domain;
        if(typeof domain !== 'string') throw new TypeError("Passd parameters should be a string");
        if(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain)){
            return true;
        }
        return false;
    }
    isDate(date){
        this.date = date;
        if(typeof date !== 'string') throw new TypeError("Passd parameters should be a string");
        if(/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(date)){
            return true;
        }
        return false;
    }
    isPhone(number){
        this.number = number;
        if(typeof number !== 'string') throw new TypeError("Passd parameters should be a string");
        if(/^(\([0-9]{3}\) |[0-9]{2}-)[0-9]{2}-[0-9]{2}/.test(number)){
            return true;
        }
        return false
    }
}
let validator = new Validator();
console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('(555) 55-55-55'));