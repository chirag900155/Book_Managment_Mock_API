const express = require('express')
const Router = express.Router()
const BookManagment = require('../../Models/BooksModels.js')

Router.delete('/books/:id', async (req, res) =>{
    const {id} = req.params

    try{
        const deleteBook = await BookManagment.findByIdAndDelete(id)

        if(!deleteBook){
            return res.status(400).json({ message: "Please enter the right object id" })
        }

        return res.status(200).json({ message: "Book Deleted Succesfully" })
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router