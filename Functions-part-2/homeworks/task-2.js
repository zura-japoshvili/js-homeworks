// #### Task 3

// Improve your implementation of function `mix`. If any callback 
// throw error - catch it and go to the next callback. Function `mix` has 
// to return always object with two properties `errors` and `value`. Note 
// that `value` contains the result of calls to all callbacks, and ` errors` 
// contains an array with information about all errors and the callback index where it was generated.

// Example:

// ```javascript
// mix(() => {
//     return 0;
// }, (prev) => {
//     return prev + 1;
// }, (prev) => {
// 	throw new RangeError('Range is wrong');
// }, (prev) => {
//     return prev * 3;
// });
// // Function returns
// {
//     errors: [{
//             name: 'RangeError',
//             message: 'Range is wrong',
//             stack: '... stack of your error ...',
//             level: 2
//     }],
//     value: 3
// }

function mix(...funcs){
    let errors = [];
    let value;
    funcs.forEach((cb, index) => {
        if(typeof cb !== 'function'){
            throw new Error("every parameter should be a function");
        }
        try {
            value = cb(value);
        } catch (error) {
            errors.push(
                {
                    name: error.name,
                    message: error.message,
                    stack: error.stack,
                    level: index
                }
            )
        }   
    })
    return {errors, value}
}
const result = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
	throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
});
console.log(result)