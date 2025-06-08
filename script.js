const addNewBook = document.querySelector(".item__button");
const submitForm = document.getElementById("new__book-form");

addNewBook.addEventListener("click", function () {
    const bookForm = document.querySelector(".form__modal");
    bookForm.style.display = "flex";
});



let myLibrary = [];




function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
 


function Book() {

}



function addBookToLibrary() {
    
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let checkbox = document.getElementById("checkbox").value;

    let newBook = new Books(title, author, pages, checkbox);

    myLibrary.push(newBook);
    console.log(newBook)
}


submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
}); 