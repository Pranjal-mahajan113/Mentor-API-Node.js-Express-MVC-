const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Career")
.then(()=>{
    console.log("Connection Established")
})
.catch((err)=>{
    console.log(`No connection ,ERROR ${err}`)
})