const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const connect = require('./connect.js')

/* All the book APIS are calling here  */

const createBook = require('./Router/BookRouter/createBookRouter.js')
const getAllBooks = require('./Router/BookRouter/getAllBooks.js')
const getSpecificBook = require('./Router/BookRouter/getSpecificBook.js')
const updateTitle = require('./Router/BookRouter/updateBookTitle.js')
const deleteBook = require('./Router/BookRouter/deleteBook.js')

/* All the book APIS are ending here */

/* All the Review APIS are calling here  */

const addReview = require('./Router/ReviewRouter/addReview.js')
const getSpecificBookReviews = require('./Router/ReviewRouter/getABookReview.js')

/* All the Review APIS are calling ended here  */

app.use(express.json())

/* All the book APIS are calling here  */

app.use('/api', createBook)

app.use('/api', getAllBooks)

app.use('/api', getSpecificBook)

app.use('/api', updateTitle)

app.use('/api', deleteBook)

/* All the book APIS are ending here */

/* All the Review APIS are calling here  */

app.use('/api', addReview)

app.use('/api', getSpecificBookReviews)

/* All the Review APIS are calling ended here  */

connect()
app.listen(port, () =>{
    console.log(`Server is running on this PORT : ${port}`);
})