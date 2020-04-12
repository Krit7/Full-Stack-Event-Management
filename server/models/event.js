const mongoose = require('mongoose')

const EventSchema =new mongoose.Schema({
    title: String,
    description: String,
    by: String,
    place: String
})

const Event= mongoose.model('Event',EventSchema)

module.exports= Event