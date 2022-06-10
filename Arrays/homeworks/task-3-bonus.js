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
let newArr = array;
let count = 0;

function rotate(arr, value, d="right"){
    arr = arr !== newArr ? newArr : array; 

    if(!Array.isArray(arr)){
        throw new Error ("Error: first parameter should be an array");
    }else if(typeof value !== 'number'){
        throw new Error ("Error: second parameter should be a number");
    }else{
        // let index = arr.indexOf(value);
        if(d === 'right'){
            // let temp = (arr.length - 1) > index ? arr[index + 1] : arr[0];
            tmp = arr.pop();
            arr.unshift(tmp);
            count ++;
            newArr = arr;
        }else{
            tmp = arr.shift();
            arr.push(tmp);
            count ++;
            newArr = arr;
        }
    }
    return arr;
}

try {
    console.log(rotate(array, 1, 'left'), count);
    console.log(rotate(array, 1, 'left'), count);
    console.log(rotate(array, 1, 'right'), count);
} catch (error) {
    console.log(error.message);
}