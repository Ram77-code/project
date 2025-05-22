import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var  ram="Ram";
var Nature="Nature";
var Animals="Animals";
var Divine="Divine";
var Shiv="Shiv";
var Lake="Lake";







app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.render("index.ejs");
    
});

app.get("/feature", (req, res) => {


    res.render("feature.ejs");
   
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
   
});

app.get("/Ai-images", (req, res) => {
    res.render("Ai-images.ejs");
    
});

app.post("/submit", (req, res) => {

if(req.body["fName"]===ram){

    res.render("images.ejs", { name1: ram });


}
else if(req.body["fName"]===Nature){

    res.render("images.ejs", { name2: Nature });

}
else if(req.body["fName"]===Animals){

    res.render("images.ejs", { name3: Animals });

}
else if(req.body["fName"]===Divine){

    res.render("images.ejs", { name4: Divine });

}
else if(req.body["fName"]===Shiv){

    res.render("images.ejs", { name5: Shiv });

}
else if(req.body["fName"]===Lake){

    res.render("images.ejs", { name6: Lake });

}
else{ 
    res.render("images.ejs", { name7: "Your Text not Matched" });
    
    

      }






});
 

  
  


app.listen(port, () => {
    console.log(`Listening on port:${port}`);
});


  