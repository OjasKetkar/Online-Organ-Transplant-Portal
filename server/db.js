const mongoose = require ('mongoose')

function connectDB(){

    mongoose.connect(
        'mongodb+srv://nulife:nulife123@nulife.3yjtloh.mongodb.net/?retryWrites=true&w=majority'
    )
        .then(
            () => {
                console.log("Connected")
            }
        ).catch(
            () => {
                console.log("Failed")
            }
        )
    console.log("Connected")
}


connectDB()

module.exports = mongoose