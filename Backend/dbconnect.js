const mongoose= require("mongoose");
require("dotenv").config()
mongoose.connect(process.env.murl).then(()=>{
    console.log("connected to DB")
}
)
const schema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        year:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
)
const details=new mongoose.model("details",schema);
module.exports=details;