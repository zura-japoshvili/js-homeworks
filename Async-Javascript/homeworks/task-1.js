// ### Task 1

// Create the function `send` that will be wrapper for function `get` which supports only `
// callback` approach.

// **ATTENTION**:

// 1. The function `send` **HAS TO RETURN** promise.
// 2. Using `async & await` **PROHIBITED**.
// 3. Using third party libraries (except `fetch`) **PROHIBITED**.
// 4. If server sends response with status code `200` promise **HAS TO BE** resolved with parameter. 
// This parameter is an object that contains properties about the request. one of the properties 
// is `data` which is also an objec which stores information about different countries.
//    you should return `data` .
// 5. If server send response with status code non `200` promise **HAS TO BE** rejected 
// with text `We have error, status code: ${statusCode}`


// const https = require('https');
const get = require("fetch").fetchUrl;

const send = (url) =>
    new Promise((resolve, reject) => {
        get(url, (error, meta, body) => {
            const { data } = JSON.parse(body);
            const  statusCode  = meta.status;
            if(statusCode === 200){
                resolve(data);
            }else{
                reject(`We have error, status code: ${statusCode}`)
            }
          });
    });

const url = "https://api.first.org/data/v1/countries";
send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error.message);
    });