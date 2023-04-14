const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("viewengine","ejs");
mongoose.connect("mongodb://127.0.0.1:27017/foodsDB",{useNewUrlParser:true});
app.use(express.static("public"));
const foodSchema = {
    type:String,
    maxdeliverytime:Number
};
const Food = mongoose.model("Food",foodSchema);
app.get("/food",function(req,res){
Food.find()
.then(function(food){
res.send(food)
})
.catch(function(err){
console.log(err);
});
});
app.get("/food?type=fast-food",function(req,res){
    Food.find()
    .then(function(food){
    res.send(food)
    })
    .catch(function(err){
    console.log(err);
    });
    });
    app.get("/food?type=fast-food&maxdeliverytime=50",function(req,res){
        Food.find()
        .then(function(food){
        res.send(food)
        })
        .catch(function(err){
        console.log(err);
        });
        });
app.post("/food",function(req,res){
const foodItem = new Food({
    type:req.body.type,
    maxdeliverytime:req.body.maxdeliverytime
});
});
app.post("/food/:id",function(req,res){
    const foodItem = new Food({
        type:req.body.type,
        maxdeliverytime:req.body.maxdeliverytime
    });
    });
app.delete("/food",function(req,res){
Food.deleteMany({})
.then(function(foods){
console.log(foods)
})
.catch(function(foods){
console.log(err);
})
});
app.post("/food/order",function(req,res){
const foodSchemas = new mongoose.Schema({
    foodId:Number,
    status:String
});
const Fooditems = mongoose.model(Fooditems,foodSchemas);
const food = new Fooditems({
    foodId:req.body.foodId,
    status:req.body.status
});
});
app.put("/food:id",function(req,res){
Food.updateMany(
{type:req.params.id},{orderId:req.body.orderId,status:req.body.status}
)
.then(function(){
console.log("Secesfully updated");
})
.catch(function(err){
console.log(err);
});
});
app.listen(2000,function(){
console.log("Server is running at port 2000!!!");
})