// ### Task 4

// Create class `Countries` that during creating instance, waits for one parameter as a string. 
// This parameter will be API end point.

// Class `Countries` should contain one method `send` that returns promise.

// Method `send` waits for one parameter, that should be with type `region` and after we'll 
// use this value as parameter `region` in `GET`.
// example: `https://api.first.org/data/v1/countries?region=europe`

// **ATTENTION**:

// 1. The method `send` **HAS TO RETURN A** promise.
// 2. Using `async & await` inside class **PROHIBITED**.
// 3. Using third party libraries (except `fetch`) **PROHIBITED**.
// 4. If server sends response with status code `200` promise **HAS TO** return `data` 
// property from api response.
// 5. If server sends response with status code non `200` promise **HAS TO BE** rejected 
// with text `We have error, status code: ${statusCode}`.
// 6. Throw error if `url` isn't string type.
// 7. Throw error if passed parameter inside `send` method isn't `string`.

// **Example**:

// ```javascript


const get = require("fetch").fetchUrl;
class Countries {
    constructor(url){
        if(typeof url !=='string'){
            throw new TypeError("Url parameter should be a string");
        }
        this.url = url;
    }
    send = (region) => {
        if(typeof region !=='string'){
            throw new TypeError("Country parameter should be a string");
        }
        return new Promise((resolve, reject) => {

            this.url += "?region=" + region;
            get(this.url, (error, meta, body) => {
                const { data } = JSON.parse(body);
                const  statusCode  = meta.status;
                if(statusCode === 200){
                    resolve(data);
                }else{
                    reject(`We have error, status code: ${statusCode}`)
                }
            });
        });
    }

}
const url = "https://api.first.org/data/v1/countries";
const countries = new Countries(url);
(async () => {
  try {
    const data = await countries.send('africa');
    console.log(data); // Data.
  } catch (error) {
    console.log(error);
  }
})();