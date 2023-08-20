const express = require('express')
const Router = express.Router()
const BookManagment = require('../../Models/BooksModels.js')
const Review = require('../../Models/ReviewsModels.js')

Router.get('/books/:bookId/reviews', async (req, res) =>{
    const {bookId} = req.params

    try{
        const book = await BookManagment.findById(bookId)

        if(!book){
            return res.status(400).json({ message: "Enter right object ID" })
        }

        const getAllRevews = await Review.find({ book: bookId })

        return res.status(200).json({ message: getAllRevews })
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router