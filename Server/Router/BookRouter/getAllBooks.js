const express = require('express')
const Router = express.Router()
const BookManagment = require('../../Models/BooksModels.js')

Router.get('/books', async (req, res) =>{
    BookManagment.find()
    .then(users=>{
        return res.json(users)
    })
})

module.exports = Router