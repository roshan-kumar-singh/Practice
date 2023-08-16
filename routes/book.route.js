const express = require('express');
const router =express();
const BookController = require('../controllers/book.controller');

router.post("/addBook",BookController.CreateBook);

module.exports = router;