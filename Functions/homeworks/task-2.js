// #### Task 2
// Create function `f` that takes array as parameter and then displays 
// elements of this array on the screen using for loop. This function has to validate an input parameter.
// validations are the following:

// - Passed parameter has to be array.
// - Passed array can not be empty.
// - Passed array can only contain numbers.

// ```js
// f([1, 2, 3]);
// // 1
// // 2
// // 3
// f(1, 2, 3); // Error: parameter type should be an array
// f("Content"); // Error: parameter type should be an array
// f([]); // Error: parameter can't be an empty
// f(["🧛🏼", "👨🏽‍🔧",5, "dogs"]); // Error: parameter type should be array of numbers
// ```

// Now handle error and log message in console

function f(arr){
    if(!Array.isArray(arr)){
        throw new Error ("Error: parameter type should be an array");
    }else if(arr.length === 0){
        throw new Error ("Error: parameter can't be an empty");
    }else if(!arr.every(value => typeof value === 'number')){
        throw new Error ("Error: parameter type should be array of numbers");
    }else{
        arr.forEach(value => console.log(value));
    }
}

try{
    f([1,2,3]);
} catch(e){
    console.log(e.message);
}