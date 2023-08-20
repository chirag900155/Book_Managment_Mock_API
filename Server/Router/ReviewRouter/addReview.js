const express = require('express')
const Router = express.Router()
const BookManagment = require('../../Models/BooksModels.js')
const Review = require('../../Models/ReviewsModels.js')

Router.post('/books/:bookId/reviews', async (req, res) =>{
    const {bookId} = req.params

    const {rating, text} = req.body
    try{

        const book = await BookManagment.findById(bookId)

        if(!book){
            return res.status(400).json({ message: "Enter right object ID" })
        }

        const review = new Review({book: bookId, rating, text})
        await review.save()

        return res.status(200).json({ message: "Review added succesfully" })
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Something went wrong"})
    }
})

module.exports = Router;