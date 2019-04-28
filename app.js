 var express=require("express"),
     app= express(),
     mongoose=require("mongoose"),
     bodyParser=require("body-parser"),
     Browser=require("./models/Series"),
     seed=require("./seeds"),
     methodOverride=require("method-override")

seed()
mongoose.connect("mongodb://localhost/chartnew");     
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"))

app.get("/", function(req, res){
    res.redirect("/series")
})

app.get("/series",function(req, res){
    Browser.find({},function(err, data){
        if(err){
            console.log(err)
        } else{
            console.log("index",data)
            res.render("index",{data: data})
        }
    })
    
})

app.get("/highchart",function(req, res){
    res.render("index2")
})

app.get("/series/edit",function(req, res){
     Browser.find({},function(err, data){
        if(err){
            console.log(err)
        } else{
            console.log("app",data)
            res.render("new",{data: data})
        }
    })
})

app.put("/series/update",function(req, res){
    var series=req.body.series;
    var version=req.body.version;
    var arr=[];
    var c=2;
    console.log("this is version",version)
    
    for(i=0;i<version.value.length;i++){
        var data=version.value[i]
        var item=data.split(",");
                    var a=parseFloat(item[1]);
                    item[1]=a;
                    
                    arr.push(item)
               
    }
    console.log("this is arr",arr)
    //   version.value.forEach(function(data, i){
               
     arr.forEach(function(data,i){
         var temparray = arr.slice(i,i+3);
        var d=i%3;
        
         if(d==0){
             
               console.log( i,temparray )
             Browser.findOneAndUpdate({"name":series.name[(i/3)]},{"version":temparray},function(){
                            console.log("updated this ")
                            
          })
         }
          
          
     })              
               
    //              console.log("this is data",item)
                
                
              
                    
              
    //         })
            
     Browser.find({},function(err, data){
         if(err){
             console.log(err)
         }
         else{
              data.forEach(function(data, i){
          Browser.findOneAndUpdate({"name":series.name[i]},{"value":series.value[i]},function(){
                            console.log("updated")
          })
          
         
             
            
        
    
     })
         }
         
     })


     
    res.redirect("/")
})

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server has Started");
})