const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const drinkRoutes = require("./routes/drinkRoutes");
drinkRoutes(app);

app.listen(port, () => console.log("The server is all fired up on port " + port));
