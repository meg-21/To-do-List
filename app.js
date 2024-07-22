const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

let newItems = []
app.get("/", (req,res) =>{
    let options = { weekday: 'long' , year:'numeric' , month: 'long' , day: 'numeric'};
    let today = new Date();
    let day = today.toLocaleDateString("en-US",options);
    res.render("list" ,{KindOfDay: day, newListItems: newItems} );
})

app.post('/', (req,res) => {
   let newItem = req.body.newItem;
   newItems.push(newItem);
   res.redirect('/');

});
app.listen(4000, () => console.log("port is running at server 4000"))
