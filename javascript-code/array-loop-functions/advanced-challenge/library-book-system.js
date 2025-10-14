// Library Book System

// Array of books, each with title, author, and isBorrowed.
// Functions:
// Add a book
// Borrow a book (set isBorrowed = true)
// Return a book (set isBorrowed = false)
// Show all available books


const books = [];

let nextId = 1;

const addBooks = (author, title, isBorrowed) => {
    const bookList = {
        id: nextId++,
        author: author,
        title: title,
        isBorrowed: isBorrowed
    }

    books.push(bookList);

    console.log(books);
}

const borrowBook = () => {
    let result = [];

    for(let i =  books.length - 1; i >= 0; i--) {
        let book = books[i];

        if(book.isBorrowed === true) {
           books.splice(i, 1);
           result.push(`${book.author} is deleted`) //${book} just converts the object to a string → [object Object]
        }else {
           book;
        } 
    }

  console.log(result);
  console.log(books)
}

addBooks("Divine", "Love from the sky", true);
addBooks("Ikechukwu", "Heart String", false);
addBooks("Loveth", "Idle", false);
addBooks("Shedrack", "Rich dad and poor dad", true);


console.log("---------------borrow book------------")
borrowBook()