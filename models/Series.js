var mongoose=require("mongoose")



var browserSchema= new mongoose.Schema({
   
    value: Number,
    name: String,
    id: String,
    version:Object
 
})

module.exports=mongoose.model("Browser",browserSchema)