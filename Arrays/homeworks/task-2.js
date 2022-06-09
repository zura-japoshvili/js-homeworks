// #### Task 2

// Create function `reverse`, that gets array as parameter and returns array in opposite order.

// Function should contain next checks:

// - Parameter required and has to be only array
// - Throw error if passed empty array
// - Creating new array is not allowed
// - Using Array.reverse is not allowed

// ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]
// ``` 

const array = [3,2,1];

function reverse(arr){
    if(!Array.isArray(arr)){
        throw new Error ("Error: passed parameter should be an array")
    }else if(arr.length === 0){
        throw new Error ("Error: array is empty");
    }else{
        return arr.reduce((accumulator, value) => {
            return [value, ...accumulator];
        }, []);;
    }
}

try{
    console.log(reverse(array));    
}catch (e){
    console.log(e.message);
}

