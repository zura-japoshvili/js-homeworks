// #### Task 1

// Create function `getDivisors` that takes a number as a parameter and returns an 
// array of its divisors (the numbers that divide the given number from 1 to the this number). 
// This function has to validate the input parameter, because function can accept only a number greater than 0.
// (To add a new element in existing array, use array.push(element) method.)

// ```
// // Push example:
// const arr = [1,2];
// console.log(arr); // [1,2]
// arr.push(5);
// console.log(arr) // [1,2,5];
// ```

// ```js
// getDivisors(12); // [1, 2, 3, 4, 6, 12]
// getDivisors("Content"); // Error: parameter type is not a Number
// getDivisors(0); // Error: parameter can't be a 0
// ```

// Now handle error and log message in console

function getDivisors(value){
    let array = [];
    if(typeof value !== "number"){
        throw new Error ("Error: parameter type is not a Number");
    }
    else if(value === 0){
        throw new Error ("Error: parameter can't be a 0");
    } else{
        for(let i = 1; i<=value;i++){
            if(value % i === 0){
                array.push(i);
            }
        }
        return array;
    }
}

try{
    console.log(getDivisors(12));
} catch(e){
    console.log(e.message);
}
