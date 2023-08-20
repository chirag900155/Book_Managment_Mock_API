const mongoose = require('mongoose')

async function connectMongoDB (){

    const URI = 'mongodb+srv://ChiragGwalani:Chirag123@cluster0.6smf1n8.mongodb.net/BookManagementSystem?retryWrites=true&w=majority';

    try{
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected Succesfully");
    }catch(err){
        console.log(err);
    }
}

module.exports = connectMongoDB