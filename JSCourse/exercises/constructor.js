function Book (title, author, pages, read){
    this.title = title,
    this. author = author,
    this.pages = pages,
    this.read = read,

    this.info = function() {
        info = (title, " by ", author, ", ", pages);
        if (read == true) {
            info += "already read";
        }
        else {
            info += "not read yet";
        }
        return (title, author, pages, read);
    }
}

const TheHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);

TheHobbit.info();