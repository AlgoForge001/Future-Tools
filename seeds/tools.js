const mongoose = require("mongoose");
const Tool = require("../models/tools");

mongoose.connect("mongodb://127.0.0.1:27017/FuturesTools");

const tools = [

    {
        title: "Midjourney",
        description: "High-quality AI image generation for artists and designers.",
        link: "https://www.midjourney.com",
        img: "https://www.midjourney.com/favicon.ico",
        category: "Image & Art"
    },
    {
        title: "DALL·E 3",
        description: "OpenAI’s advanced AI image generator from text prompts.",
        link: "https://openai.com/dall-e",
        img: "https://openai.com/favicon.ico",
        category: "Image & Art"
    },
    {
        title: "Leonardo.ai",
        description: "Generative AI platform for creators, designers, and game assets.",
        link: "https://leonardo.ai",
        img: "https://leonardo.ai/favicon.ico",
        category: "Image & Art"
    },
    {
        title: "Magnific AI",
        description: "AI-powered image upscaler and enhancer.",
        link: "https://magnific.ai",
        img: "https://magnific.ai/favicon.ico",
        category: "Image & Art"
    },
    {
        title: "Krea AI",
        description: "Real-time creative AI generation for images and designs.",
        link: "https://www.krea.ai",
        img: "https://www.krea.ai/favicon.ico",
        category: "Image & Art"
    },
    {
        title: "Adobe Firefly",
        description: "Adobe’s creative generative AI models for images and text effects.",
        link: "https://www.adobe.com/firefly",
        img: "https://www.adobe.com/favicon.ico",
        category: "Image & Art"
    },
    {
        title: "Canva Magic Design",
        description: "AI-powered design suite for social media and presentations.",
        link: "https://www.canva.com/magic-design/",
        img: "https://www.canva.com/favicon.ico",
        category: "Image & Art"
    },
    {
        title: "Flair.ai",
        description: "AI design tool for creating branded product content.",
        link: "https://flair.ai",
        img: "https://flair.ai/favicon.ico",
        category: "Image & Art"
    },
    {
        title: "Remove.bg",
        description: "AI-powered background removal from images.",
        link: "https://www.remove.bg",
        img: "https://www.remove.bg/favicon.ico",
        category: "Image & Art"
    },
    {
        title: "ClipDrop",
        description: "AI photo editing and image enhancement suite.",
        link: "https://clipdrop.co",
        img: "https://clipdrop.co/favicon.ico",
        category: "Image & Art"
    },

    {
        title: "Perplexity AI",
        description: "AI-powered search engine for research and answers.",
        link: "https://www.perplexity.ai",
        img: "https://www.perplexity.ai/favicon.ico",
        category: "Research"
    },
    {
        title: "Notion AI",
        description: "AI writing and productivity assistant inside Notion.",
        link: "https://www.notion.so/product/ai",
        img: "https://www.notion.so/favicon.ico",
        category: "Productivity"
    },
    {
        title: "Claude",
        description: "Anthropic’s conversational AI for reasoning and writing.",
        link: "https://claude.ai",
        img: "https://claude.ai/favicon.ico",
        category: "Chat"
    },
    {
        title: "Otter.ai",
        description: "AI meeting notes, transcription, and summaries.",
        link: "https://otter.ai",
        img: "https://otter.ai/favicon.ico",
        category: "Speech-To-Text"
    },
    {
        title: "Humata AI",
        description: "Chat with PDFs and analyze documents using AI.",
        link: "https://www.humata.ai",
        img: "https://www.humata.ai/favicon.ico",
        category: "Research"
    },
    {
        title: "Consensus",
        description: "AI-powered research engine for scientific papers.",
        link: "https://consensus.app",
        img: "https://consensus.app/favicon.ico",
        category: "Research"
    },
    {
        title: "Gamma",
        description: "AI-powered presentation and website builder.",
        link: "https://gamma.app",
        img: "https://gamma.app/favicon.ico",
        category: "Productivity"
    },
    {
        title: "ChatPDF",
        description: "Chat with any PDF document using AI.",
        link: "https://www.chatpdf.com",
        img: "https://www.chatpdf.com/favicon.ico",
        category: "Research"
    },
    {
        title: "Explainpaper",
        description: "Simplifies and explains complex research papers.",
        link: "https://www.explainpaper.com",
        img: "https://www.explainpaper.com/favicon.ico",
        category: "Research"
    },
    {
        title: "Tome",
        description: "AI-powered storytelling and presentation creation.",
        link: "https://tome.app",
        img: "https://tome.app/favicon.ico",
        category: "Productivity"
    },

    {
        title: "Runway",
        description: "Generative video creation and creative AI tools.",
        link: "https://runwayml.com",
        img: "https://runwayml.com/favicon.ico",
        category: "Video"
    },
    {
        title: "Pika Labs",
        description: "Idea-to-video AI generation platform.",
        link: "https://pika.art",
        img: "https://pika.art/favicon.ico",
        category: "Video"
    },
    {
        title: "HeyGen",
        description: "AI video generation, avatars, and translation.",
        link: "https://www.heygen.com",
        img: "https://www.heygen.com/favicon.ico",
        category: "Video"
    },
    {
        title: "Suno AI",
        description: "AI-generated music and song creation platform.",
        link: "https://suno.ai",
        img: "https://suno.ai/favicon.ico",
        category: "Audio & Music"
    },
    {
        title: "ElevenLabs",
        description: "High-quality AI speech synthesis and voice cloning.",
        link: "https://elevenlabs.io",
        img: "https://elevenlabs.io/favicon.ico",
        category: "Text-To-Speech"
    },
    {
        title: "Descript",
        description: "AI-powered video and podcast editing tool.",
        link: "https://www.descript.com",
        img: "https://www.descript.com/favicon.ico",
        category: "Video"
    },
    {
        title: "Lovo.ai",
        description: "AI voice generator for narration and content creation.",
        link: "https://lovo.ai",
        img: "https://lovo.ai/favicon.ico",
        category: "Text-To-Speech"
    },
    {
        title: "InVideo AI",
        description: "Text-to-video AI content creation platform.",
        link: "https://invideo.io/ai",
        img: "https://invideo.io/favicon.ico",
        category: "Video"
    },
    {
        title: "Synthesia",
        description: "AI video avatars for training and marketing videos.",
        link: "https://www.synthesia.io",
        img: "https://www.synthesia.io/favicon.ico",
        category: "Video"
    },
    {
        title: "Adobe Podcast",
        description: "AI audio recording and enhancement tools.",
        link: "https://podcast.adobe.com",
        img: "https://www.adobe.com/favicon.ico",
        category: "Audio & Music"
    },

    {
        title: "GitHub Copilot",
        description: "AI pair programmer for faster coding.",
        link: "https://github.com/features/copilot",
        img: "https://github.com/favicon.ico",
        category: "Code"
    },
    {
        title: "Cursor",
        description: "AI-powered code editor for developers.",
        link: "https://cursor.sh",
        img: "https://cursor.sh/favicon.ico",
        category: "Code"
    },
    {
        title: "Replit Ghostwriter",
        description: "AI coding assistant inside Replit.",
        link: "https://replit.com/site/ghostwriter",
        img: "https://replit.com/favicon.ico",
        category: "Code"
    },
    {
        title: "Tabnine",
        description: "AI code completion for developers.",
        link: "https://www.tabnine.com",
        img: "https://www.tabnine.com/favicon.ico",
        category: "Code"
    },
    {
        title: "10Web",
        description: "AI-powered WordPress website builder.",
        link: "https://10web.io",
        img: "https://10web.io/favicon.ico",
        category: "Code"
    },
    {
        title: "Framer AI",
        description: "Website builder that generates sites from text.",
        link: "https://www.framer.com/ai",
        img: "https://www.framer.com/favicon.ico",
        category: "Code"
    },
    {
        title: "Durable",
        description: "AI website builder for small businesses.",
        link: "https://durable.co",
        img: "https://durable.co/favicon.ico",
        category: "Code"
    },
    {
        title: "Blackbox AI",
        description: "AI-powered code search and generation tool.",
        link: "https://www.useblackbox.io",
        img: "https://www.useblackbox.io/favicon.ico",
        category: "Code"
    },
    {
        title: "Codeium",
        description: "Free AI code acceleration platform.",
        link: "https://codeium.com",
        img: "https://codeium.com/favicon.ico",
        category: "Code"
    },
    {
        title: "Mutable.ai",
        description: "AI-accelerated software development platform.",
        link: "https://mutable.ai",
        img: "https://mutable.ai/favicon.ico",
        category: "Code"
    },

    {
        title: "Jasper",
        description: "AI copywriting platform for marketing teams.",
        link: "https://www.jasper.ai",
        img: "https://www.jasper.ai/favicon.ico",
        category: "Marketing"
    },
    {
        title: "Copy.ai",
        description: "AI marketing copy generator for businesses.",
        link: "https://www.copy.ai",
        img: "https://www.copy.ai/favicon.ico",
        category: "Marketing"
    },
    {
        title: "Writesonic",
        description: "AI writing tool for blogs and advertisements.",
        link: "https://writesonic.com",
        img: "https://writesonic.com/favicon.ico",
        category: "Marketing"
    },
    {
        title: "QuillBot",
        description: "AI paraphrasing and writing assistant.",
        link: "https://quillbot.com",
        img: "https://quillbot.com/favicon.ico",
        category: "Writing"
    },
    {
        title: "Grammarly",
        description: "AI writing assistant for grammar and clarity.",
        link: "https://www.grammarly.com",
        img: "https://www.grammarly.com/favicon.ico",
        category: "Writing"
    },
    {
        title: "Surfer SEO",
        description: "AI-driven SEO and content optimization tool.",
        link: "https://surferseo.com",
        img: "https://surferseo.com/favicon.ico",
        category: "Marketing"
    },
    {
        title: "AdCreative.ai",
        description: "AI-generated ad creatives for marketing campaigns.",
        link: "https://www.adcreative.ai",
        img: "https://www.adcreative.ai/favicon.ico",
        category: "Marketing"
    },
    {
        title: "Brandmark",
        description: "AI logo and brand identity generator.",
        link: "https://brandmark.io",
        img: "https://brandmark.io/favicon.ico",
        category: "Marketing"
    },
    {
        title: "Rytr",
        description: "AI writing assistant for content creation.",
        link: "https://rytr.me",
        img: "https://rytr.me/favicon.ico",
        category: "Writing"
    },
    {
        title: "Originality.ai",
        description: "AI content detector and plagiarism checker.",
        link: "https://originality.ai",
        img: "https://originality.ai/favicon.ico",
        category: "AI Detection"
    }

];

async function seedDB() {
    await Tool.deleteMany({});
    await Tool.insertMany(tools);
    console.log("DB seeded 🌱");
}

seedDB();
