const express = require('express')
const Router = express.Router()
const BookManagment = require('../../Models/BooksModels.js')

Router.get('/books/:id', async (req, res) =>{
    const {id} = req.params

    try{

        const book = await BookManagment.findById(id)

        if(!book){
            return res.status(400).json({ message: "Please enter the right book ID" })
        }

        return res.status(200).json({ message: `find Succesfully ${book}` })
    }catch(err){
        console.log(err)
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router