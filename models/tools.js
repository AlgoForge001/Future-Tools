const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toolsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        set: (v) => v === "" ? "https://pin.it/2OR0Wjqen" : v,
    },
    category: {
        type: String,
        enum: [
            "AI Detection",
            "Aggregators",
            "Automation & Agents",
            "Avatar",
            "Chat",
            "Writing",
            "Copywriting",
            "Finance",
            "Gaming",

            "Image & Art",
            "Image Scanning",

            "Code",
            "Video",
            "Audio & Music",

            "Marketing",
            "Social Media",

            "Productivity",
            "Prompt Guides",
            "Research",
            "Self-Improvement",

            "Speech-To-Text",
            "Text-To-Speech",
            "Translation",
            "Voice Modulation"
        ],
        default:"Productivity"
    },
    reviews:[
        {
            type :Schema.Types.ObjectId,
            ref:"comment",
        },
    ]

});

const tools = mongoose.model("tools", toolsSchema);
module.exports = tools;
