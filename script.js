const addNewBook = document.querySelector(".item__button");
const submitForm = document.getElementById("new__book-form");
const bookForm = document.querySelector(".form__modal");

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
 
function displayBooks() {

    let libraryBooks = document.getElementById("content__table-items");

    let books = "";

    myLibrary.map(book => {
        books += `
        <tr class="table__items">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read}</td>
            <td><button class="btn btn-primary">Delete</button></td>
        </tr>
    `;
    });

    libraryBooks.innerHTML = books;
}

function addBookToLibrary() {
    
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let checkbox = document.getElementById("checkbox").value;

    let newBook = new Books(title, author, pages, checkbox);

    myLibrary.push(newBook);
    bookForm.style.display = "none";
    displayBooks();


    console.log(newBook)
}


submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
}); 

