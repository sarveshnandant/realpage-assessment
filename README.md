# realpage-assessment
This repo is used for Real Page Assessment

Problem 1 - Write function to find the second largest integer in the array using single loop

Problem 2 - Given the Harry Potter API - https://docs.potterdb.com/apis/rest
Fetch the list of books and select the first book
Fetch the chapters for that book and print the “summary” value of the last chapter to the console. Also include error handling in case the API is unavailable.

1. Run `npm install` command.
2. Run `node index.js` command.
3. There are three endpoint are defined.
   3.1. http://localhost:3000/books - fetch all books to https://api.potterdb.com/v1/books
   3.2. http://localhost:3000/book/0fef89ab-87f0-4e75-ae6c-67398354c723/details - fetch single book details based on book Id.
   3.3. http://localhost:3000/book/summary - fetch the firstBook details and print last chapter summary.
