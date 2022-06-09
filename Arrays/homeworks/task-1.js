// #### Task 1

// Create function `f`. This function gets one parameter: one dimensional or 
//multidimensional array. This function returns the sum of all elements from all dimensions.

// Note that the function should return the 0, if during the calculation of 
// all levels (dimensions) no number was found.

// Function should contain next checks:

// - Parameter is required and has to be only array.
// - Throw error if on any dimension (level) you found not a number or not a array.

// - using flat, flatMap is not allowed.

// ```javascript
// const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// f(arr); // 12
// const arr2 = [[[[[1,2]]]]];
// f(arr2); // 3
// const arr3 = [[[[[1,2]]],2],1];
// f(arr3); // 6
// const arr4 = [[[[[]]]]];
// f(arr4); // 0
// const arr5 = [[[[[],3]]]];
// f(arr5); // 3
// ```

const array = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];


function arrSum(arr) {
    let sum = 0;
    arr.forEach((value) =>{
        if (Array.isArray(value)){
            sum += arrSum(value);
        }else{
            sum += value;
        }
    });
    return sum;
}

function f(arr) {
    if(!Array.isArray(arr)){
        throw new Error("Error: parameter should be an array");
    }else if(arr.forEach(value => typeof value !== 'number')){
        throw new Error("Error: each value should be an array or number");
    }else{
        console.log(arrSum(arr));
        
    }
}

try{
    f(array);
} catch (e){
    console.log(e.message);
}