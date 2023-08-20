const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        require: true
    },
    rating:{
        type: Number,
        require: true
    },
    text:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Reviews', reviewSchema)