const express = require("express");
const app= express();
const mongoose = require("mongoose");
const Tools = require("./models/tools.js");
const path = require("path");




app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({extended: true}))




//db connection
const MONGO_URL = "mongodb://127.0.0.1:27017/FuturesTools";

main()
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    })
    
async function main() {
    await mongoose.connect(MONGO_URL);
    
}


//testing db
// app.get("/test" , async (req , res)=>{
//     let sampleTest  = new tools({
//         title:"New Test tools",
//         description:"New description",
//         link:"www.google.com",
//         img:"https://pin.it/2OR0Wjqen",
//     });
//     await sampleTest.save();
//     console.log("sample was saved");
//     res.send("succseful test done");

// })



app.get("/" , (req , res)=>{
    res.send("Router Working");
});

app.get("/tools" , async(req , res)=>{
    const allTools = await Tools.find({});
    res.render("tool" , {allTools});
});

app.get("/tools/:id" , async(req , res)=>{
    let {id} = req.params;
    const tool_details = await Tools.findById(id);
    res.render("tool-details" , {tool_details})

})


app.listen(3000, ()=>{
    console.log("Server is working on port 3000");
}); 