const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.post("/", function(req,res){

    const apiKey = '9a37fc7fc4a4149eeefd0792fe425e92'
    const location = req.body.cityName
    const unit = 'metric'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=' +apiKey+ '&units=' + unit
   
    https.get(url, function(response) {

        response.on('data', function(data) {
            
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
            
            res.write('<h1>temperature in '+ location +' is: ' + temp + ' degress Celcius.</h1>')
            res.write('<p>The weather is currently: ' + weatherDescription + '</p>')
            res.write('<img src=' +imageURL+ '>')
            res.send()
        })
    })
})

app.listen(3000, function() {
    console.log('server running on port 3000')
})