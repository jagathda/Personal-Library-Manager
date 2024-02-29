let library = []; //initialize an emplty array

//--Add new books--
const addBook = (title, author) => {
    library.push({title, author, readStatus:false}) //add a new book
}

addBook("The Pilgrim’s Progress", "John Bunyan");
addBook("Robinson Crusoe", "Daniel Defoe");
addBook("Gulliver’s Travels", "DJonathan Swiftasana");
console.log("After adding books");
console.log(library); 



//--Mark a book as read--
const markAsRead = (title) => {
    let bookIndex = library.findIndex(book => book.title === title); //find the index of the given book
    return library[bookIndex].readStatus = true;
}

markAsRead("Gulliver’s Travels"); 
console.log("After readStatus set to true");
console.log(library); 



//--Remove a book--
const removeBook = (title) => {
    let bookIndex = library.findIndex(book => book.title == title); //find the index of the given book
    library.splice(bookIndex, 1);
}

removeBook("Gulliver’s Travels"); 
console.log("Results after removing a book");
console.log(library); 



//--List all unread books--
console.log("List of unread books"); 
const listUnread = () => {
    let unreadBooks = library.filter(book => book.readStatus == false); //filter unread books
    unreadBooks.map(book => {
            console.log(book.title); //map and log titels of unread books
    });
}

listUnread(); 



//--Find books by author--
console.log("Find a book by author"); 
const findBooksByAuthor = (author) => {
    let bookAuthor = library.filter(book => book.author === author); //filter by author
    bookAuthor.map(book => {
        console.log(book.title);
    });
}   

findBooksByAuthor("John Bunyan");



//--Check if the library includes a book by title using 'some'--
console.log("Find the availablity of a book");
const bookExistsSome = (title) => {
    let availableBook = library.some(book => book.title === title); //some by title
    if (availableBook == true) {
        console.log("Yes, book is in the library");
    } else {
         console.log("Sorry, book is not in the library");
    }
}

bookExistsSome("Robinson Crusoe");


//--Check if the library includes a book by title using 'includes'--
const bookExistsInclude = (title) => {
    let availableBook = library.map(book => book.title); //map by title
    if (availableBook.includes(title)) {                 //check by includes
        console.log("Yes, book is in the library");
    } else {
         console.log("Sorry, book is not in the library");
    }
}

bookExistsInclude("Robinson Crusoe");