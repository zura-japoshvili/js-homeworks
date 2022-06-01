// ####Task 7

// Write code for counting sum of all even values in array. Show result in console.

// ```js
// const arr = [1,2,3,4];
// ```

const arr = [1,2,3,4];

let sum = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        sum += arr[i];
    }
}
console.log(sum);