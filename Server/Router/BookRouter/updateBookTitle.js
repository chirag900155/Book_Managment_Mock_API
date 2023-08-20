const express = require('express')
const Router = express.Router()
const BookManagment = require('../../Models/BooksModels.js')

Router.put('/books/:id', async (req, res) =>{
    const {id} = req.params
    const {ti} = req.body

    try{
        const updatedBook = await BookManagment.findByIdAndUpdate(id, { title: ti })

        if(!updatedBook){
            return res.status(400).json({ message: "Id not found" })
        }

        return res.status(200).json({ message: "Updated Sucesfully" })
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router