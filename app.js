// Book Class: Prepresents a Books
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks

class UI {
    static displayBooks(){
        const StoredBooks = [
            {
                title: "book one",
                author: "Muha",
                isbn: "12345"
            },

            {
                title: "bbosa",
                author: "mb",
                isbn: "23453"
            }
        ];

        const books = StoredBooks;
        
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list  = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
        `;

        list.appendChild(row);
    }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book

// Event: Remove a Book