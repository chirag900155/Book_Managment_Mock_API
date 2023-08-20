const express = require('express')
const Router = express.Router()
const BookManagment = require('../../Models/BooksModels.js')

Router.post('/books', async (req, res) =>{
    const {ti, author} = req.body

    try{
        if(!ti && !author){
            return res.status(400).json({ message: "Please enter the title and author" })
        }

        const createBook = new BookManagment({ title: ti, author })
        await createBook.save()

        return res.status(200).json({ message: " Book Added succesfully " })

    }catch(err){
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router