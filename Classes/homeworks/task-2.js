// #### Task 2

// Implement the class **Student** that extends the class **User**. This class has to have next properties:

// - **name** (extends from User)
// - **surname** (extends from User)
// - **year** (year of admission) ( if passed less than 2018, throw an error )

// This class has to have next methods:

// - method **getFullName()** (extends from User). Using this class we can get name and surname together.
// - method **getCourse()** that returns current course (from 1 to 4). To calculate it: 
// need to subtract from current year the year of admission.

// Example:
class user{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return this.name + " " + this.surname;
    }
}
class Student extends user{
    constructor(name, surname, year){
        super(name, surname, year)
        this.year = year;
    }
    getCourse(){
        if(this.year >= 2018){
            return new Date().getFullYear() - this.year;
        }else{
            throw new RangeError('Year should be greater than 2018');
        }
    }
}
let student = new Student("John", "Smith", 2020);
console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());
