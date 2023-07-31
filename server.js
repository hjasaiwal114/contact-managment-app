const errorHandler = require("./middleware/errorHandler");

const express  = requires("express");
const dotenv = require("dotenv").config();


const app  = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});