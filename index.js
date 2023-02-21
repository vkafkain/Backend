const express = require("express");
const cors = require("cors")
const { pageNotFound } = require("./controllers/errorHandler");
const app = express();
const {connectDB} = require("./database/db.connection");
const User = require("./models/User");
const { designDB } = require("./database/db.design");
const PORT = process.env.SERVER_PORT || 3000;

designDB()

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.use('/', require("./routes"));

app.use(pageNotFound);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)});