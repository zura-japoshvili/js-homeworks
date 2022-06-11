// # Task 2

// Write a `reverseCase(sentence)` function to replace uppercase letter with 
// lowercase letters and lowercase letters with uppercase ones.

// Function should throw an error if parameter is not a string.

// examples:

// `reverseCase('Hello theRe') // expected: 'hELLO THErE'`

// `reverseCase('BIG LETTERS') // expected: 'big letters'`

// `reverseCase('') // expected: ''`

reverseCase = (sentence) =>{
    if(typeof sentence !== 'string'){
        throw new TypeError("Error: parameter type isn't string");
    }else{
        return sentence.replace(/./g, (c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
    }
}

try {
    console.log(reverseCase('BIG LETTERs'));
} catch (error) {
    console.log(error.message);
}