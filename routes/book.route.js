const express = require('express');
const router =express();
const BookController = require('../controllers/book.controller.js');

router.post("/addBook",BookController.CreateBook);

 router.get("/getAllData",BookController.GetAllBookDetails);

 router.put("/:id",BookController.UpdateData);

 router.delete("/:id",BookController.DeletingBook);

module.exports = router;