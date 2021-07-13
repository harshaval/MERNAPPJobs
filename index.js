const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

//using cors
app.use(cors());

//BodyParser middleware
app.use(bodyParser.json);

//cookie parser
app.use(cookieParser());

const mongoURI = "mongodb+srv://thisusername:thisisthepassword@projectcluster.sa4pw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//connect to mongo db
try{
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useUnifiedTopology: true,
    }, () => console.log("Mongoose is connected"));
} catch (err) {
    console.log("could not connect");
}

const port = process.env.PORT || 3000;

//listening to the server 
app.listen(port, function() {
    console.log("server started on " + port);
});