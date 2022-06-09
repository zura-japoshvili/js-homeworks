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