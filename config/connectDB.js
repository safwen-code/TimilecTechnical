const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoUri')

const connectDB = async() =>{
    try {
        let connectbase = await mongoose.connect(db)
        console.log('db is connected')
    } catch (error) {
        console.error(error)
        console.log('problem with mongoose')
    }
}
module.exports = connectDB
