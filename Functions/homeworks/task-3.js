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
    try{
        func("Hello");
    } catch(e) {
        console.log(e.message);
    }
}

function sayHello(value){
    if(value !== "Hello"){
        throw new Error ("Error: Just say hello");
    }else{
        console.log(value);
    }
}


genericFunction(sayHello);