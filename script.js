let myLibrary = [];
let myLibraryCopy = []; // Used when loading page to remove books already displayed
let libraryID = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.libraryID = libraryID;
    libraryID++;
}

Book.prototype.remove = function(id) {
    removeBookFromLibrary(id);
}

Book.prototype.changeRead = function() {
    this.read = !this.read;
    updateBookSelection();
}

//delete this, just a test
//let testbook = new Book('hello', 'no', 150, true);
//let testbook2 = new Book('hello2', 'no2', 152, false);
//myLibrary.push(testbook);
//myLibrary.push(testbook2);
//delete this, just a test

function addBookToLibrary(name, author, pages, read) {
    let book = new Book(name, author, pages, read);
    myLibrary.push(book);
    myLibraryCopy.push(book);
    displayBookSelection();
}

function removeBookFromLibrary(id) {
    myLibrary.splice(id, id+1);

    updateBookSelection();
}

function createLibraryCopy() {
    for(let i = 0; i < myLibrary.length; i++) {
        myLibraryCopy.push(myLibrary[i]);
    }
}

function updateBookSelection() {
    document.querySelectorAll('.book-card').forEach(e => e.remove());
    createLibraryCopy();
    displayBookSelection();
}

function displayBookSelection() {
    const display = document.querySelector("#book-display");
    for(let i = 0; i < myLibraryCopy.length; i++) {
        const bookDisplay = document.createElement("div");
        bookDisplay.classList.add("book-card");

        display.appendChild(bookDisplay);

        addTitle(bookDisplay, myLibraryCopy[i]);
        addAuthor(bookDisplay, myLibraryCopy[i]);
        addPages(bookDisplay, myLibraryCopy[i]);
        addRead(bookDisplay, myLibraryCopy[i]);
        addRemoveButton(bookDisplay, i);
        addReadButton(bookDisplay, i);
    }
    myLibraryCopy = [];
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
    book.readDisplay = contentRead;
}

function addRemoveButton(bookDisplay, i) {
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.id = myLibraryCopy[i].libraryID;
    removeButton.textContent = "Remove";
    removeListener(removeButton);
    bookDisplay.appendChild(removeButton);
}

function addReadButton(bookDisplay, i) {
    const readButton = document.createElement("button");
    readButton.classList.add("remove-button");
    readButton.id = myLibraryCopy[i].libraryID;
    readButton.textContent = "Read";
    readListener(readButton);
    bookDisplay.appendChild(readButton);
}

function buttonListener() {
    const newBookButton = document.querySelector('#new-book-button');
    newBookButton.onclick = () => getBookInformation();
}

function removeListener(button) {
    button.onclick = () => removeBook(button);
}

function readListener(button) {
    button.onclick = () => changeBookRead(button);
}

function removeBook(button) {
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].libraryID == button.id) {
            myLibrary[i].remove(i);
        }
    }
}

function changeBookRead(button) {
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].libraryID == button.id) {
            myLibrary[i].changeRead();
        }
    }
}

function getBookInformation() {
    let bookName = window.prompt("Enter book name");
    if(bookName == "" || bookName == null) {
        return;
    }
    let bookAuthor = window.prompt("Enter book author");
    if(bookAuthor == "" || bookAuthor == null) {
        return;
    }
    let bookPages = window.prompt("Enter book pages");
    if(bookPages == "" || bookPages == null) {
        return;
    }
    let bookRead = confirm("Has the book been read?");
    let confirmed = confirm("Is this okay: Name("+bookName+") - Author("+bookAuthor+") - Pages("+bookPages+") - Read("+bookRead+")");
    if(confirmed == true) {
        addBookToLibrary(bookName, bookAuthor, bookPages, bookRead);
    }
}

buttonListener();
createLibraryCopy();
displayBookSelection();

