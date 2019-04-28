var mongoose=require("mongoose"),
    Browser=require("./models/Series")
    
 
    var data = [
        { value: 62.74, name: "Chrome",id:"Chrome",version:[
             [
                        "v64.0",
                        1.3
                    ],
                   
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ]]},
        { value: 10.57, name: "Firefox",id:"Firefox",version:[
             [
                        "v64.0",
                        1.3
                    ],
                   
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ]]},
        { value: 7.23, name: "Internet Explorer",id:"Internet Explorer",version:[
             [
                        "v64.0",
                        1.3
                    ],
                   
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ]]},
        { value: 5.58, name: "Safari",id:"Safari",version:[
             [
                        "v64.0",
                        1.3
                    ],
                   
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ]]},
        { value: 4.02, name: "Edge",id:"Edge",version:[
             [
                        "v64.0",
                        1.3
                    ],
                   
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ]]}
    ];

function seed(){
    
    Browser.remove({},function(err){
        if(err){
            console.log(err)
        } else{
        data.forEach(function(seed){
            Browser.create(seed, function(err, data){
             if(err){
                 console.log(err)
             } else{
                 console.log("Created a Series");
             }
         })
        })
         
        }
    })
    

    
}
module.exports=seed;