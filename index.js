const request = require('request'); 
var API_KEY = '8261fdf394797cfc26384ca4ed94f00d'; 
  
const forecast = function (cityname) { 
  
var url = `http://api.openweathermap.org/data/2.5/weather?`
            +`q=${cityname}&appid=${API_KEY}&units=metric`
  
    request({ url: url, json: true }, function (error, response) { 
        if (error) { 
            console.log('Unable to connect to Forecast API'); 
        } 
          else { 
            console.log('It is currently '+ response.body.main.temp+ ' degrees out.');  
            console.log('The high today is '+ response.body.main.temp_max+ ' with a low of '+ response.body.main.temp_min);   
            console.log('Humidity today is '+ response.body.main.humidity
            ); 
        } 
    }) 
} 
  
var cityname = "Mumbai";

forecast(cityname); 