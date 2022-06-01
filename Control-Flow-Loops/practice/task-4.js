// ####Task 4

// Replace code with using only one `switch`:

// ```js
// const a = 0;

// if (a == 0) {
//   console.log(0);
// }
// if (a == 1) {
//   console.log(1);
// }

// if (a == 2 || a == 3) {
//   console.log("2 or 3");
// }

const a = 0;
switch(a){
    case 0 :
        console.log(0);
        break;
    case 1 :
        console.log(1);
        break;
    case 2 :
    case 3 : 
        console.log("2 or 3");
        break;
}