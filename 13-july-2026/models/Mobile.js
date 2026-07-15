const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MobileSchema = new Schema({
    mobileId: { type: String, required: true },
    mobileModel: { type: String, required: true },
    Brand: { type: String, required: true },
    price: { type: String, required: true },
    design: { type: String, required: true },
    screenSize: { type: String, required: true },
})

module.exports = mongoose.model('Mobile', MobileSchema)