let myFirstBook = new Book("One Fish Two Fish Red Fish Blue Fish","Dr. Seuss",66,true);
let mySecondBook = new Book("Green Eggs and Ham","Dr. Seuss",72,true);
let myLibrary = [myFirstBook, mySecondBook];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

function render(books) {
  let table = document.getElementById("Library");
  for (let i = 0; i < books.length; i++) {
    let row = table.insertRow();

    let indexColumn = document.createElement("TH");
    indexColumn.setAttribute("scope", "row");
    indexColumn.innerHTML = i+1;
    row.appendChild(indexColumn);


    let titleColumn = row.insertCell(1);
    titleColumn.innerHTML = books[i].title;
    let authorColumn = row.insertCell(2);
    authorColumn.innerHTML = books[i].author;
    let pagesColumn = row.insertCell(3);
    pagesColumn.innerHTML = books[i].pages;
    let readColumn = row.insertCell(4);
    readColumn.innerHTML = books[i].read;
  }
}

render(myLibrary);
