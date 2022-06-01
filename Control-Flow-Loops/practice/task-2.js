// ####Task 2

// Replace `if..else` to several ternary operators. 

// For readability - write the code in several lines.

// ```js
// let message;

// if (login == 'Pitter') {
//   message = 'Hi';
// } else if (login == 'Owner') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'unknown';
// } else {
//   message = '';
// }
// ```

let message;

message =  login == 'Pitter' ? "Hi" : login == 'Owner' ? "Hello" :  login == '' ? 'unknown' : "";

