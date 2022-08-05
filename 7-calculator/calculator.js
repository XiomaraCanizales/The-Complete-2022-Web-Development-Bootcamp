const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send(`The result of the calculation is ${result}`);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / Math.pow(height, 2);
    let category;

    if (bmi < 18.4) {
        category = "You are underweight";
    } else if (bmi = 18.5 || bmi < 25) {
        category = "You have normal weight";
    } else if (bmi = 25 || bmi < 29.0) {
        category = "You have overweight";
    } else {
        category = "You have obesity";
    }

    res.send(`Your BMI is ${bmi}. ${category}`);

});

app.listen(3000);