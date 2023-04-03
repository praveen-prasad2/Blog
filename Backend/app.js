const express = require("express")
const app = express()
const mongoose = require('mongoose')
const sampleRouter=require("./Routes/sample")
const cors=require("cors")
mongoose.connect("mongodb+srv://uglymallu:123@cluster0.jonxpqi.mongodb.net/Blog?retryWrites=true&w=majority")

app.use(express.urlencoded({
    extended: false
}))

app.use(cors())

app.use(express.json())

app.use("/",sampleRouter)

app.listen(5000, (err) => {
    if (err) {
        console.log("error");
    } else {
        console.log("success");
    }
})