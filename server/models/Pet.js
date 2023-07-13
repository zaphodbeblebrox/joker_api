const mongoose = require("mongoose")

const PetSchema = new mongoose.Schema({
    animalType: {
        type: String,
        required: [true, "All animals must have a type!"]
    },
    name: {
        type: String,
        required: [true, "All animals must have a name!"]
    },
    isSick: {
        type: Boolean,
        required: [true, "All animals must have a health staus!"]
    },
    numOfLegs: {
        type: Number,
        required: [true, "All animals must a number of legs!"]
    }
}, {timestampes: true})

module.exports = mongoose.model("Pet", PetSchema);