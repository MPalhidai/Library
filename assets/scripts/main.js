let myFirstBook = new Book("One Fish Two Fish Red Fish Blue Fish","Dr. Seuss",66,true);
let mySecondBook = new Book("Green Eggs and Ham","Dr. Seuss",72,true);
let myLibrary = [myFirstBook, mySecondBook];
let index = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// add book might need to add to table

function addBookToLibrary() {
  let addTitle = document.getElementById("new-title").value;
  let addAuthor = document.getElementById("new-author").value;
  let addPages = document.getElementById("new-pages").value;
  let radios = document.getElementsByName("new-read");

  radios.forEach(function(radio) {
    if (radio.checked) addRead = radio.value;
  });

  let newBook = new Book(addTitle,addAuthor,addPages,addRead);
  myLibrary.push(newBook);
  render(myLibrary);
}

function render(books) {

  // have an outer container and if rendered delete it before continuing
  //  or have add book add a row to table?
  // if (booksContainer) { mainContainer.removeChild(booksContainer); }

  let table = document.getElementById("Library");
  while (index < books.length) {
    let row = table.insertRow();

    let indexColumn = document.createElement("TH");
    indexColumn.setAttribute("scope", "row");
    indexColumn.innerHTML = index+1;
    row.appendChild(indexColumn);


    let titleColumn = row.insertCell(1);
    titleColumn.innerHTML = books[index].title;
    let authorColumn = row.insertCell(2);
    authorColumn.innerHTML = books[index].author;
    let pagesColumn = row.insertCell(3);
    pagesColumn.innerHTML = books[index].pages;
    let readColumn = row.insertCell(4);
    readColumn.innerHTML = books[index].read;

    index++;
  }
}

render(myLibrary);
