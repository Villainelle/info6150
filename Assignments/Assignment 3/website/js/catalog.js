// Define book data array
let books = [
    {
        image: "images/lord-rings.png",
        title: "The Lord of the Rings",
        author: "J.R.R Tolkien",
        description: "The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkiens 1937 fantasy novel The Hobbit, but eventually developed into...",
        copiesAvailable: 5,
        category: "fiction"
    }, {
        image: "images/two-cities.jpg",
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        description: "The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkiens 1937 fantasy novel The Hobbit, but eventually developed into...",
        copiesAvailable: 8,
        category: "non-fiction"
    }, {
        image: "images/little-princess.jpg",
        title: "The Little Princess",
        author: "Antoine de Saint-Exupéry",
        description: "The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkiens 1937 fantasy novel The Hobbit, but eventually developed into...",
        copiesAvailable: 5,
        category: "fiction"
    }, {
        image: "images/hobbit.jpg",
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        description: "The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkiens 1937 fantasy novel The Hobbit, but eventually developed into...",
        copiesAvailable: 6,
        category: "non-fiction"
    }, {
        image: "images/alice.jpg",
        title: "Alices Adventures in Wonderland",
        author: "Lewis Carroll",
        description: "The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkiens 1937 fantasy novel The Hobbit, but eventually developed into...",
        copiesAvailable: 2,
        category: "fiction"
    },
];

// Function to display books
function displayBooks(searchBooks) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    searchBooks.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>Title: ${book.title}</h2>
            <p>Author: ${book.author}</p>
            <div class="accordion-body">
              <div class="row justify-content-center-center">
                <div class="col-12 col-sm-2">
                    <img class="img-fluid d-block mx-auto mx-sm-0" src="${book.image}" width="130" alt="">
                </div>
                <div class="col-12 col-sm-9 mt-4 mt-sm-0 d-sm-block d-flex flex-column">
                  <p class="fw-semi-bold text-black">Copies Available: ${book.copiesAvailable}
                  <span class="reserve">${book.status == undefined ? '' : book.status}</span>
                  </p>
                  <p>Description: ${book.description}</p>
                  <p class="fw-semi-bold">Category: ${book.category}</p>
                  <button class="btn btn-lg btn-primary" onclick="reserveBook('${book.title}')">Reserve</button>
                </div>
              </div>
            </div>
        `;
        bookList.appendChild(li);
    });
}

// Function to filter books
function filterBooks() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const categoryFilter = document.getElementById("category-filter").value.toLowerCase();
    let filteredBooks = books;
    if (searchInput) {
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(searchInput) ||
            book.author.toLowerCase().includes(searchInput)
        );
    }
    if (categoryFilter) {
        filteredBooks = filteredBooks.filter(book => book.category === categoryFilter);
    }
    displayBooks(filteredBooks);
}

displayBooks(books);

// Function to reserve a book
function reserveBook(title) {
    const cardNumber = prompt("Enter your library card number:");
    if (cardNumber === null || cardNumber.trim() === "") {
        alert("Please enter a valid library card number.");
        return;
    }
    var storedCardNumber = localStorage.getItem("libraryCardNumber");
    if (storedCardNumber != cardNumber) {
        alert("Sorry, this card number is illegal.");
        return;
    }

    const bookIndex = books.findIndex(book => book.title === title);
    if (bookIndex !== -1) {
        if (books[bookIndex].copiesAvailable > 0) {
            books[bookIndex].copiesAvailable--;
            books[bookIndex].status = "Reserved";
            filterBooks();
            alert("Book reserved successfully!");
        } else {
            alert("Sorry, this book is currently unavailable.");
        }
    } else {
        alert("Book not found in catalog.");
    }
}

