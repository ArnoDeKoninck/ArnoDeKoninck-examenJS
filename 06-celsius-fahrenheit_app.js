//Arno De Koninck Cursus WebDev Examen Exercise 06
//Declerations

//Converts user input degrees in Fahrenheit to user input degrees in Celsius
function convertToC() {
  let input = parseInt(
    prompt("Hoeveel graden Fahrenheit wilt u omzetten naar Celsius?", "90")
  );
  let result = ((input - 32) * 5) / 9; //formula to convert fahrenheit to celsius
  alert(input + "°F is: " + result.toFixed(1) + "°C");
}
//Converts user input degrees in Celsius to user input degrees in Fahrenheit
function convertToF() {
  let input = parseInt(
    prompt("Hoeveel graden Celsius wilt u omzetten naar Fahrenheit?", "20")
  );
  let result = (input * 9) / 5 + 32; //formula to convert celsius to fahrenheit

  alert(input + "°C is: " + result + "°F");
}
