// # Task 3

// Write a `searchWord` function to find a word within a string. Count found word(s).
// `searchWord` takes 2 parameters:

// 1. Word or a sentence - string
// 2. Word or a sentence to find - string

// Also add type checks and throw an error if params are not strings.

// ```javascript
// searchWord("The quick brown fox", "fox"); // "'fox' was found 1 times."
// searchWord("aa, bb, cc, dd, aa", "aa"); // "'aa' was found 2 times."
// searchWord("sunshine", "sun"); // "'sun' was found 1 times."
// ```

searchWord = (sentence, word) => {
    if(typeof sentence !== 'string' || typeof word !== 'string'){
        throw new TypeError("Error: both parameter should be string");
    }else{
        let counter = 0;
        let arr = sentence.split(" ");
        arr.forEach(element => {
            if(element.includes(word)){
                counter ++;
            }
        });
        return `'${word}' was found ${counter} times.`;
    }
}

try {
    console.log(searchWord("aa, bb, cc, dd, aa", "aa"));
} catch (error) {
    console.log(error);
}