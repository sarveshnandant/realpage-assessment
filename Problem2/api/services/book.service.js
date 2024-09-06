const axios = require('axios');
require('dotenv').config();

const BookService = {
    getAllBooks: async () => {
        try {
            const response = await axios.get(process.env.BASE_URL);
            return response.data;
        } catch (error) {
            console.error('BookService::getAllBooks::Error fetching  all books ', error.message);
            throw new Error('An error occurred while fetching all books');
        }
    },
    getBookDetailsByBookId: async (bookId) => {
        try {
            const response = await axios.get(`${process.env.BASE_URL}/${bookId}/chapters`);
            return response.data;
        } catch (error) {
            console.error('BookService::getBookDetailsByBookId::Error fetching book details by bookId ', error.message);
            throw new Error('An error occurred while fetching book details by bookId');
        }
    }
};

module.exports = BookService;
