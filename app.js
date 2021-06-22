
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  res.render("FEC_SITE");
});
app.get("/capital",function(req,res){
  res.render("capital");
});
app.get("/InFocus",function(req,res){
  res.render("InFocus");
});
app.get("/InNews",function(req,res){
  res.render("InNews");
});
app.get("/MasterClass",function(req,res){
  res.render("MasterClass");
});
app.get("/PodCast",function(req,res){
  res.render("PodCast");
});
app.get("/Quant",function(req,res){
  res.render("Quant");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
