
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = ["Buy Food", "Cook Food", "Eat Food"] ;
let workList = [] ;

app.set('view engine', "ejs");

app.get("/", function(req, res) {

var day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItem : items
  });


});

app.post("/", function(req, res){
  let item = req.body.newItem ;

  if(req.body.bsk === "work"){
    workList.push(item);
    res.redirect("/work");
  } else{
      items.push(item);
        res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle : "work", newListItem: workList})
});




app.listen(4000, function() {
  console.log("server is running on port 4000");
});
