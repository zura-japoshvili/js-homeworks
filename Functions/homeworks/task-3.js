// #### Task 2

// Write a function `genericFunction(func)` that takes another function as its 
// only parameter. inside `genericFunction` you have to call ( execute ) function that was passed by parameter.
// `genericFunction` must be prepared for errors and handle them by logging error messages in the console.

// Example:

// ```
// function sayHello(){
//     console.log('hello');
// }
// genericFunction(sayHello);

// // result:
// 'hello';

// -------------------------------

// function addOne(){
//     const a = 2;
//     a++;
//     console.log(a)
// }
// genericFunction(addOne);

// // result:
// Assignment to constant variable.

function genericFunction(func){
    if(typeof func !== 'function'){
        throw new Error ("Error: passed parameter should be a function");
    }else{
        func();
    }
}

function sayHello(){
    console.log('hello');
}

try{
    genericFunction(sayHello);
} catch(e) {
    console.log(e.message);
}
