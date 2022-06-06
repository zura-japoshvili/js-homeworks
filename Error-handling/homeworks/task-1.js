// #### Task 3

// ```
// const value = 100;
// const nearLimit = 90;
// const limit = 100;

// ```

// write a program which validates `value` variable. you should throw an error 
// with corresponding message if value is greather than `nearLimit`. While handling 
// errors, if `value` is greater than `nearLimit`, just console log a warning message, 
//however, if value is greater than `limit`, then rethrow an error.

const value = 101;
const nearLimit = 90;
const limit = 100;

try{
    if(value > nearLimit){
        throw new Error("value is greater than nearLimit: " + nearLimit); 
    }
} catch{
    if(value > limit){
        throw new Error("value is greater than limit: " + limit);
    } else if(value > nearLimit){
        console.log("Warning !");
    }
}