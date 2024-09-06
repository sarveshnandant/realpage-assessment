
const { BookService } = require('../services');

const BookController = {
    getAllBooks: async (req, res) => {
        try {
            // Call service method to fetch all books
            const books = await BookService.getAllBooks();
            // Send the fetched books as JSON response
            return res.json(books);

        } catch (error) {
            console.error('BookController::getAllBooks::Error in fetching all books', error.message);
            return res.status(500).json({ error: 'An error occurred while fetching all books' });
        }
    },
    getBookById: async (req, res) => {
        const bookId = req.params;
        try {
            if (!bookId) {
                throw new AppError('bookId cannot be blank', 400, 'GENERAL_MISSING_PARAMS');
            }
            // Call service to fetch single book details by bookId
            const bookDetails = await BookService.getBookDetailsByBookId(bookId.id);
            // Send the fetched books as JSON response
            return res.json(bookDetails);

        } catch (error) {
            console.error('BookController::getBookById::Error in fetching book by Id', error.message);
            return res.status(500).json({ error: 'An error occurred while fetching book detail by Id' });
        }
    },
    getBookSummary: async (req, res) => {
        try {
            const books = await BookService.getAllBooks();
            const firstBook = books?.data ? books.data[0] : {};

            if (!firstBook) {
                console.log('No firstbooks found');
                return;
            }

            const chapters = await BookService.getBookDetailsByBookId(firstBook?.id);

            if (!chapters.data || chapters.data.length === 0) {
                console.log('No chapters found for selected book');
                return;
            }
            const lastChapter = chapters.data[chapters.data.length - 1];
            console.log('Summary of the last chapter:', JSON.stringify(lastChapter.attributes.summary));

            return res.json(lastChapter.attributes.summary);

        } catch (error) {
            console.error('BookController::getBookSummary::Error in fetching book summary', error.message);
            return res.status(500).json({ error: 'An error occurred while fetching book summary' });
        }

    }
};

module.exports = BookController;