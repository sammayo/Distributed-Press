$("#btn-add-book").click(() => window.location.href="/addbook");

var Book = Backbone.Model.extend({});

var Books = Backbone.Collection.extend({
  model: Book,
  url: "examples/territories.json" // need to update this
});

var books = new Books();
books.push(new Book({
    "book": "A Tale of Two Cities",
    "author": "Charles",
    "date": "",
    "hash": "fudge"
}));

var columns = [
    {
        name: "book",
        label: "Book",
        cell: "string"
    }, {
        name: "author",
        label: "Author",
        cell: "string"
    }, {
        name: "date",
        label: "Date Registered",
        cell: "date"
    }, {
        name: "hash",
        label: "Hash",
        cell: "string" // Renders the value in an HTML anchor element
    }
];

// Initialize a new Grid instance
var grid = new Backgrid.Grid({
  columns: columns,
  collection: books, 
});

// Render the grid and attach the root to your HTML document
$("#grid-book-data").append(grid.render().el);
