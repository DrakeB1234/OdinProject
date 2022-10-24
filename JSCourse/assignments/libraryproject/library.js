let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBook = () => {
    console.log("heelo");
}

window.onload = () => {
    getBookData();
}

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const author = document.getElementById('author-inp').value;
    const title = document.getElementById('title-inp').value;
    const pages = document.getElementById('pages-inp').value;
    let read = "Have not read this book yet";

    if (document.getElementById('read-inp').checked == true) {
        read = "Already read this book";
    }

    myLibrary.push(new Book(author, title, pages, read));

    getBookData();
});

function removeBook(i) {
    myLibrary.splice(i, 1);
    getBookData();
}

function changeReadStatus(i) {
    let index = 0;
    myLibrary.forEach((e) => {
        if (index == i && e.read == 'Have not read this book yet'){
            e.read = 'Already read this book';
        }
        else if (index == i){
            e.read = 'Have not read this book yet';
        }
        index++;
    });
    getBookData();
}

function getBookData() {
    const dataPost = document.getElementById('data-get');
    let html = "";
    let index = 0;
    dataPost.innerHTML = "";
    myLibrary.forEach((e) => {
        html += ("\
        <div class='item-container'>\
            <h2>Author:</h2><h3>" + e.author + "</h3>\
            <h2>Title:</h2><h3>" + e.title + "</h3>\
            <h2>Pages:</h2><h3>" + e.pages + "</h3>\
            <div class='read-book'><h3>" + e.read + "</h3><button onclick='changeReadStatus(" + index + ")'>Change</button></div>\
            <button onclick='removeBook(" + index + ")' class='remove-book'>Remove Book</button>\
        </div>");
        index++;
    });
    dataPost.innerHTML = html;
}