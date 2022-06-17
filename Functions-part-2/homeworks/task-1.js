// #### Task 2

// Write your own implementation of function `mix`. This function is waiting for 
// unlimited number of parameters. Each parameter has to be function, 
// else throw error. Function `mix` invokes callbacks one by one. Each 
// callback as a parameter get result of previous callback invoking. 
// First callback doesn't get any parameter.

// Example:

// ```javascript
// mix(() => {
//     return 0;
// }, (prev) => {
//     return prev + 1;
// }, (prev) => {
//     return prev * 2;
// }) // 2
// ```

function mix(...funcs){
    if(!funcs.every(value => typeof value === 'function')){
        throw new Error("every parameter should be a callback")
    }
    let callback = funcs[0]
    let firstElement = callback()
    for(let i = 1; i < funcs.length; i++){
        let element = funcs[i]
        firstElement =  element(firstElement)
    }
    return firstElement
}

const result = mix(
  () => 0,
  (prev) => prev + 1,
  (prev) => prev + 2,
  (prev) => prev + 2,
  (prev) => prev + 2
);
console.log(result)




// mix = (...functions) => {
//     if(typeof functions.every !== 'function'){
//         throw new TypeError("Should be a function");
//     }else{
//         for (const f of functions) {
//             f();
//         }
        
//     }
// };
// mix(
//     () => 0,
//     (prev) => prev + 1,
//     (prev) => prev * 2
// )
// z = () =>{}
// x = () => {}
// mix(z, x);




// mix = (...cbs) => cbs.reduce((res, cb) => cb(res), undefined);

// const result = mix(
//   () => 0,
//   (prev) => prev + 1,
//   (prev) => prev * 2
// );

// console.log(result);
