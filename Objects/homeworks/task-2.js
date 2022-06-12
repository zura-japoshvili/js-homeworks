// # Task 2

// Update previous 'readingStatus(books)' function and add logic into it: if book is read by the author, 
// display how many days ago he finished it.

// *You may fing this resource helpful 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date*

// - Use object getter method name it 'daysAgo' and return string: `{x} days ago`

// Result should be:
//     'Bill have read The Road Ahead book {x} days ago'
//     'Steve have read Walter Isaacson book {x} days ago'
//     'Jhon haven't read The Hunger Games book yet'


let Books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10),
        get daysAgo(){
            const days = Math.ceil((new Date() - this.dateOfRead) / (1000 * 3600 * 24));
            return `${days} days ago`;
        }
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5),
        get daysAgo(){
            const days = Math.ceil((new Date() - this.dateOfRead) / (1000 * 3600 * 24));
            return `${days} days ago`;
        }
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
            
            console.log(`${obj.author} have read ${obj.title} book ${obj.daysAgo}`);
        }else{
            console.log(`${obj.author} haven't read ${obj.title} book yet`);
        }   
    }
}

readingStatus(Books);