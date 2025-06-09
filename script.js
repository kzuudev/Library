const addNewBook = document.querySelector(".item__button");
const submitForm = document.getElementById("new__book-form");
const bookForm = document.querySelector(".form__modal");
const removeBtn = document.querySelector(".btn");



addNewBook.addEventListener("click", function () {
    bookForm.style.display = "flex";
});

 

let myLibrary =[];


function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


Books.prototype.toggleRead = function() {
    this.read = !this.read;
}
 


function addBookToLibrary() {
    
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let checkbox = document.getElementById("read-checkbox").checked;

    let newBook = new Books(title, author, pages, checkbox);

    myLibrary.push(newBook);
    bookForm.style.display = "none";
    displayBooks();
}

function displayBooks() {

    let libraryBooks = document.getElementById("content__table-items");

    let books = "";


    myLibrary.forEach((book, index) => {
        books += `
        <tr class="table__items">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read ? "Read" : "Not Read Yet"}</td>
            <td>
            <button class="btn btn-primary" onclick="removeBook(${index})">Delete</button>
            <button class="btn btn-secondary" onclick="toggleRead(${index})">Toggle Read</button>
            </td>
        </tr>
    `;
    });

    libraryBooks.innerHTML = books;
}


submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
}); 

function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayBooks();
}

function removeBook(index) {
    console.log(index);
    myLibrary.splice(index, 1);
    displayBooks();
}


