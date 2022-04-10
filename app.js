
//Required declarations
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

//Create an array to of task
let listItems = [];
let workItems = [];

//Set ejs on our app
app.set("view engine","ejs");

//Enable body-parser
app.use(bodyParser.urlencoded({extended: true}));

//Get access to static files
app.use(express.static("public"));

//Get request
app.get("/", (req,res)=>{

  let day = date.getDate();
  res.render("list", {listTitle:day, newListItems: listItems});
});

//Post request
app.post("/",(req,res)=>{
  let item = req.body.newItem ;

  //If the list variable from the ejs file is equal to work:
  //Add the item in the workItems array
  //Then redirect it to the "/work" route
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  //Otherwise add the element to the listItems array and redict to the home route
  else{
    listItems.push(item);
    //Go back to the get request/ redirect to the home route
    res.redirect("/");
  }

});


app.get("/work",(req,res)=>{
  res.render("list", {listTitle:"Work", newListItems:workItems});
});

app.get("/about",(req,res)=>{
  res.render("about");
});

//Listening
app.listen(3000,()=>{
  console.log("Listen on port 3000");
});
