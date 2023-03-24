const express = require("express");
const app = express();
const cors= require("cors");
const pool = require("./db")
const multer = require("multer");
const path = require("path") // this is used to get the path of the file

//middleware 
    app.use(express.json())// thisis so it can parse the data into json
    app.use(cors())// this is so that it can connect with diffrent browsers
    
    const storage = multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"images/")
            console.log(file)
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now() + path.extname(file.originalname))//so we naming the file the datenow and the extention of the original file which coul;d jpgeg or png etc
        }
    })//with diskstorage form multer we are finding the destination if the file and the name of the file 

    const upload = multer({storage:storage}) // this send the uploaded pic where it need to go 


    //now adding a pic
    app.set("view engine", "ejs") // this lets us use js in html embeded js from the vew eenginne


    // adding formdata and pic data to database
    app.post("/work",upload.single("image"), async (req,res)=>{
        try {
            const {name} = req.body//the name in the elemenet is caled by js for server stuff
            const {filename} = req.file // we got to do re.fil here to get that data that was sent to json
            
            const newData = await pool.query(
                "INSERT INTO data(name,filename) VALUES($1,$2) RETURNING *",
                [name,filename]
            );
            
            res.send("it worked")
            res.json(newData.rows[0]) // then we send the json to the browser

        } catch (error) {
            console.log(error)
            res.status(500).send("server probs")
        }
    })

 // we might have to make tyhe client js if the button did not do this for us in its payload

    app.listen("5000",()=>{
        console.log("yo")
    })

