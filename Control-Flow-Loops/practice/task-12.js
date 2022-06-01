// #### Task 13

// You have array. Inside this array you can have positive and negative numbers. 
// Count a sum of positive numbers. Show result in console.
const arr = [-1, 25, -51, 21, -51, 22, 21];
let counter = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        counter ++;
    }
}
console.log(counter);