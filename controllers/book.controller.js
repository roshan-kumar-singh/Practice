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
        // console.log(saveBook);
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
//get all data 
GetAllBookDetails = async  (req, res) =>{
    try {
        const books = await Book.find({});
        console.log(books);
        res.json(books);
    } catch (err) {
        console.log('Error:', err);
        res.status(500).send('an error occured')
    }
}
//update book details
UpdateData = async (req, res) =>{

    try {
        const updatebook = await Book.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    title: req.body.title,
                    author : req.body.author ,
                    category: req.body.category
                }
            },
            {new: true});
             
        if(!updatebook){
            res.status(404).send('Book not found');
        }else{
            res.send(updatebook);
        }

    } catch (err) {
        console.log('Error:', err);
        res.status(500).send('an error occured');
    }
}

//deleting book
DeletingBook = async (req, res) => {

    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book){
            res.status(404).send('Book not found');
        }else{
            res.send(book);
        }
    } catch (err) {
        console.log('Error:', err);
        res.status(500).send('an error occured');
    }
}


}
module.exports = new bookController();
