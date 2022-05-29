// #### Task 3

// Use following code to generate a random number between 0 and 9. : `Math.floor(Math.random() * 10);`.
// Write a while loop and print 'not 5' in every iteration until number 5 gets randomly generated.

while(true){
    let num = Math.floor(Math.random() * 10);
    if(num !== 5){
        console.log("not 5");
    }else{
        break;
    }
}