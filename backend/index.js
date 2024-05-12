const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PinRoute = require('./routes/pins');
const userRoute = require('./routes/users');

require('dotenv').config();

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected')
})
.catch((err)=>{
    console.log(err)
});

app.use("/api/pins",PinRoute);
app.use("/api/users",userRoute);

app.listen(8800,()=>{
    console.log("Listening at port 8800")
})








//mongodb+srv:<username>:<password>@cluster0.yqzcvqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0