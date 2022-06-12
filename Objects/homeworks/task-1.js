// # Task 1

// Write a 'readingStatus(books)' function to display the reading status of the following books.

// - Use array iteration
// - Log each of them separately

// ```javascript
// ```

// Result should be:
//     'Bill have read The Road Ahead book'
//     'Steve have read Walter Isaacson book'
//     'Jhon haven't read The Hunger Games book yet'

let Books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN
    }
];

readingStatus = (booksArr) =>{
    for (const obj of booksArr) {
        if(obj.haveRead){
            console.log(`${obj.author} have read ${obj.title} book`);
        }else{
            console.log(`${obj.author} haven't read ${obj.title} book yet`);
        }   
    }
}

readingStatus(Books);