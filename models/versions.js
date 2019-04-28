var mongoose=require("mongoose")

var versionSchema=new mongoose.Schema({
    
        name:String,
        value:Number
    
})

module.exports=mongoose.model("Version",versionSchema)