const request = require("request")
const dotenv = require("dotenv").config()


const url = `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`


request(url, (error, response, body) => {
 const data = JSON.parse(body)
 console.log(data)
})