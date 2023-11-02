import express from "express";

const app = express ();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req,res) => {

    var dicenum1 = Math.floor(Math.random() * 6) + 1;
    var dicenum2 = Math.floor(Math.random() * 6) + 1;
    let winner = -1;
    
    if(dicenum1>dicenum2)
        winner = 1;
    else if (dicenum1<dicenum2)
        winner = 2;
    else
        winner = -1;

    res.render("dice.ejs" , {dice1 : dicenum1, dice2: dicenum2, winner: winner});
});

app.listen(port, ()=>{

    console.log("Listening on port " + port);
});

