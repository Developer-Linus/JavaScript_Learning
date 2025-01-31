const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    {title: "12 Rules for Life: An Antidote to Chaos", author: "Jordan B Peterson", year: 2018},
    {title: "The Alchemist", author: "Paulo Coelho", year: 1988},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951}
];

const booksTitle = books.map(book=>{
    return {
        title: book.title
    }
});

console.log(booksTitle);