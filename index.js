const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

//routes connecting to the job route
const jobs = require("./routes/api/jobs");
//routes connecting to the user route
const users = require("./routes/api/user");

const withAuth = require("./middleware/middleware");

//using cors
app.use(cors());

//BodyParser middleware
app.use(bodyParser.json);

//cookie parser
app.use(cookieParser());

/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname, "./client/build")));
/*React root*/

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

//user routes
app.get("/checkToken", withAuth, function(req, res){
    res.sendStatus(200);
});
app.use("/api/jobs", jobs);
app.use("/api/users/", users);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });

const port = process.env.PORT || 3000;

//listening to the server 
app.listen(port, function() {
    console.log("server started on " + port);
});