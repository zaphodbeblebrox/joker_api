const express = require("express");
// const app = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

require("./config/mongoose.config")

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

const PetRoutes = require("./routes/petRoutes");
PetRoutes(app);
// or can be done as so:
// require("./routes/petRoutes")(app);

app.listen(port, () => console.log("Running on Port " + port));