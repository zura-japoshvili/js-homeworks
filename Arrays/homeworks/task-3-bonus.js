// #### Task 3

// Create function `rotate`, which will rotate array based on given parameters.

// params:
//   array - required - target
//   number - required - count(how many times) to rotate array
//   string - optional - rotate direction: left or right. defualt is right

// - function should contain checks:
//   - first parameter required and has to be only array
//   - second parameter required and has to be number
//   - third parameter optional and has to be only string

// - creating new array is not allowed

// ```javascript
// const arr = [1,2,3];
// rotate(arr, 1, 'left');  // result: [2,3,1]
// rotate(arr, 1);  // result: [3,1,2]
// rotate(arr, 2);  // result: [2,3,1]

const array = [1,2,3];
function rotate(arr, value, d="right"){
    let newArr = arr;
    if(!Array.isArray(newArr)){
        throw new Error ("Error: first parameter should be an array");
    }else if(typeof value !== 'number'){
        throw new Error ("Error: second parameter should be a number");
    }else if(d !== 'right' && d !== 'left'){
        throw new Error ("Error: The value of the third parameter must be 'left' or 'right'");
    }else{
        if(d === 'right'){
            for(let i = 0; i< value; i++){
                tmp = newArr.pop();
                newArr.unshift(tmp);
            }
        }else{
            for(let i = 0; i< value; i++){
                tmp = newArr.shift();
                newArr.push(tmp);
            }
        }
    }
    console.log(array);
}
try {
    rotate(array, 1, 'left');
    rotate(array, 1, 'left');
    rotate(array, 1);
} catch (error) {
    console.log(error.message);
}