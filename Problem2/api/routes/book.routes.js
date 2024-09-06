const {
  BookController
} = require('../controllers');

module.exports = (app) => {
  app.get('/books', BookController.getAllBooks);
  app.get('/book/:id/details', BookController.getBookById);
  app.get('/book/summary', BookController.getBookSummary);
}