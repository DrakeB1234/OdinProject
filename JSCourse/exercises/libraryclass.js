class MakeBook {
    constructor(author, title, pages, read){
        this.author = author,
        this.title = title,
        this.pages = pages,
        this.read = read
    }

    print(){
        console.log(`\nAuthor ${this.author}\nTitle ${this.title}\nPages ${this.pages}\nRead? ${this.read}\n`);
    };
};

let book1 = new MakeBook("Harry", "The Book", 12, false);

const Library = (i) => {
    let books = [];

    const addBook = (author, title, pages, read) => {
        books.push(new MakeBook(author, title, pages, read));
    }

    const printBooks = () => {
        books.forEach(e => {
            e.print();
        });
    }

    return { addBook, printBooks };
}

const newLibrary = Library();

newLibrary.addBook("Harry", "The Book", 456, false);
newLibrary.addBook("Jerry", "The Book 1", 345, true);
newLibrary.addBook("Henry", "The Book 2", 123, false);
newLibrary.printBooks();