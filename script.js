let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//delete this, just a test
let testbook = new Book('hello', 'no', 150, true);
let testbook2 = new Book('hello2', 'no2', 152, false);
myLibrary.push(testbook);
myLibrary.push(testbook2);
//delete this, just a test

function addBookToLibrary() {
    // stuff
}

function displayBookSelection() {
    const display = document.querySelector("#book-display");
    for(let i = 0; i < myLibrary.length; i++) {
        const bookDisplay = document.createElement("div");
        bookDisplay.classList.add("book-card");

        display.appendChild(bookDisplay);

        addTitle(bookDisplay, myLibrary[i]);
        addAuthor(bookDisplay, myLibrary[i]);
        addPages(bookDisplay, myLibrary[i]);
        addRead(bookDisplay, myLibrary[i]);
    }
}

function addTitle(bookDisplay, book) {
    const contentDisplay = document.createElement("p");
    const contentTitle = document.createTextNode("Title: " + book.title);
    contentDisplay.appendChild(contentTitle);
    bookDisplay.appendChild(contentDisplay);
}

function addAuthor(bookDisplay, book) {
    const contentDisplay = document.createElement("p");
    const contentAuthor = document.createTextNode("Author: " + book.author);
    contentDisplay.appendChild(contentAuthor);
    bookDisplay.appendChild(contentDisplay);
}

function addPages(bookDisplay, book) {
    const contentDisplay = document.createElement("p");
    const contentPages = document.createTextNode("Pages: " + book.pages);
    contentDisplay.appendChild(contentPages);
    bookDisplay.appendChild(contentDisplay);
}

function addRead(bookDisplay, book) {
    const contentDisplay = document.createElement("p");
    const contentRead = document.createTextNode("Has been read: " + book.read);
    contentDisplay.appendChild(contentRead);
    bookDisplay.appendChild(contentDisplay);
}

displayBookSelection();

