import mongoose from "mongoose"

const Books = mongoose.Schema(
    {
        judul:{
            type:String,
            required:true
        },
        penulis:{
            type:String,
            required:true
        },
        rilis:{
            type:String,
            required:true
        }
    }
    )