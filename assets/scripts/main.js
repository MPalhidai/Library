let myFirstBook = new Book("One Fish Two Fish Red Fish Blue Fish","Dr. Seuss",66,"true");
let mySecondBook = new Book("Green Eggs and Ham","Dr. Seuss",72,"false");
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
    indexColumn.innerHTML = index + 1;
    row.appendChild(indexColumn);

    let titleColumn = row.insertCell(1);
    titleColumn.innerHTML = books[index].title;
    let authorColumn = row.insertCell(2);
    authorColumn.innerHTML = books[index].author;
    let pagesColumn = row.insertCell(3);
    pagesColumn.innerHTML = books[index].pages;

    let readColumn = row.insertCell(4);
    if (books[index].read == "false") {
      let justReadBtn = document.createElement("BUTTON");
      readColumn.appendChild(justReadBtn);
      justReadBtn.setAttribute("class", "btn btn-outline-success");
      justReadBtn.setAttribute("id", `${index}`);
      justReadBtn.innerHTML = "Read";

      justReadBtn.addEventListener("click", function() {
        books[this.id].read = "true";
        let tableRows = table.getElementsByTagName('tr');
        while (index > 0) {
          table.removeChild(tableRows[index-1]);
          index--;
        };
        render(myLibrary);
      });
    } else {
      readColumn.innerHTML = books[index].read;
    }

    let removeColumn = row.insertCell(5);
    let removeBtn = document.createElement("BUTTON");
    removeColumn.appendChild(removeBtn);
    removeBtn.setAttribute("class", "btn btn-outline-danger");
    removeBtn.setAttribute("id", `${index}`);
    removeBtn.innerHTML = "Remove";
    row.appendChild(removeColumn);

    // re-render whole list when removing to update list indecies
    removeBtn.addEventListener("click", function() {
      myLibrary.splice(this.id, 1);
      let tableRows = table.getElementsByTagName('tr');
      while (index > 0) {
        table.removeChild(tableRows[index-1]);
        index--;
      };
      render(myLibrary);
    });

    index++;
  }
}

render(myLibrary);
