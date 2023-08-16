const Book = require('../models/book')

class bookController {
//creating book
CreateBook = async(req,res) => {

    try {
        const newBook = new Book();
        newBook.title = req.body.title;
        newBook.author = req.body.author; 
        newBook.category = req.body.category;

        const saveBook = await newBook.save();
        console.log(saveBook);
        res.status(200).json(
            {
             message: 'Book saved successfully',
             book: saveBook

            }
        );

    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({error: 'Error saving book'});
    }

}


}
module.exports = new bookController();
