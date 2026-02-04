const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Tools = require("./models/tools.js");
const Reviews = require("./models/comment.js")
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressErrors = require("./utils/ExpressErrors.js");
const reviewSchema = require("./schema.js");




app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));




//db connection
const MONGO_URL = "mongodb://127.0.0.1:27017/FuturesTools";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
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


// const validateReview = (req , res, next)=>{
//     let{error} = reviewSchema.validate(req.body);
//     if(error){
//         let errMsg = error.details.map((el)=> el.message).join(",");
//         throw new ExpressErrors(400 ,errMsg);
//     }else{
//         next();
//     }
// };



app.get("/", (req, res) => {
    res.send("Router Working");
});

app.get("/tools", async (req, res) => {
    const allTools = await Tools.find({});
    res.render("tool", { allTools });
});
//CRUD Operations
//2 
app.get("/tools/new", (req, res) => {
    res.render("newtools");
});

//3
app.post("/tools", async (req, res) => {

        const newTools = new Tools(req.body.tool);
        await newTools.save();
        console.log(newTools);
        res.redirect("/tools");


})



//1
app.get("/tools/:id", async (req, res) => {
    let { id } = req.params;
    const tool_details = await Tools.findById(id);
    res.render("tool-details", { tool_details })

})


//4 edit
app.get("/tools/:id/edit", async (req, res) => {
    let { id } = req.params;
    const tool = await Tools.findById(id);
    res.render("edittools.ejs", { tool });
})
//5Update 
app.put("/tools/:id", async (req, res) => {
    let { id } = req.params;
    await Tools.findByIdAndUpdate(id, { ...req.body.tool });
    res.redirect("/tools");
})

//6 Delete
app.delete("/tools/:id", async (req, res) => {
    let { id } = req.params;
    await Tools.findByIdAndDelete(id);
    res.redirect("/tools");
});

//Review Model
app.post("/tools/:id/reviews" , async(req ,res)=>{
    let tool = await Tools.findById(req.params.id);
    let newComment = new Reviews(req.body.reviews);

    tool.reviews.push(newComment);
    await newComment.save();
    await tool.save();
    console.log("Comment saved");
    res.redirect(`/tools/${tool.id}`);
})




//Error handler 

app.use((req, res, next) => {
    next(new ExpressErrors(404, "Page not Found!"));
});

app.use((err, req, res, next) => {
    let {statusCode , message}= err;
    res.status(statusCode).send(message);
})

app.listen(5000, () => {
    console.log("Server is working on port 5000");
}); 