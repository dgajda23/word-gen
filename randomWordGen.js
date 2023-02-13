const express = require("express");
const app = express();
const port = 3100;
const fs = require("fs");

app.use(express.json())

app.get('/example.js', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    res.sendFile(__dirname + '/example.js');
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/example.html");
});

app.get("/example", (req, res) => {
    res.sendFile(__dirname + "/example.html");
});


app.post("/word", (req, res) => {
    let wordLength = req.body.word;
    console.log("received word length: " + wordLength)

    //
    //
    //
    fs.readFile('wordList.JSON', (error, data) => {
        if (error) {
          console.error(error);
          return;
        }
        try{
            const object = JSON.parse(data);
            let wordArr = object[wordLength];

            let responseString = wordArr[Math.floor(Math.random() * wordArr.length)];
            res.json( { responseString } );
        }
        catch (parseError){
            console.error(parseError);
        } 
      });

})

app.listen(port, () => {
    console.log(`Microservice is listening on port ${port}`);
});
