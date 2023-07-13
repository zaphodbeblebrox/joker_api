const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/petshelter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(res => console.log("Established connection!"))
    .catch(err => console.log(err));

require("../models/Pet")