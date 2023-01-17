let kelvin = 293 // the weather
let celsius = kelvin -273 // convert weather from kelvin to celsius
let fahrenheit = celsius * (9/5)+32 //convert weather from celsius to fahrenheit
fahrenheit = Math.round(fahrenheit) //rounding fahrenheit value to non decimal number
let newton = celsius * (33/100) //convert celsius to newton scale
newton = Math.round(newton)
console.log("The temprature is "+fahrenheit+" degrees Fahrenheit")
console.log("The temprature is "+newton+" degrees Newton")