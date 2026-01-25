const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toolsSchema = new Schema ({
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true ,
    },
    link:{
        type:String,
        required:true ,
    },
    img:{
        type:String,
        set:(v)=> v===""?"https://pin.it/2OR0Wjqen":v,
    },
});

const tools = mongoose.model("tools" , toolsSchema);
module.exports = tools;
