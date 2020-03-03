//Arno De Koninck Cursus WebDev Examen Exercise 02
//Declerations
let today = new Date().getDay(); //change this value to test.
let weekdayArr = [
  "zondag",
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag"
];
//Writes the day of today on the html page and checks for Saturday (index 6 of the weekdayArray) and Sunday (index 0 of the weekdayArray)
document.write(
  "Vandaag is " +
    weekdayArr[today] +
    ".<br>" +
    (today > 1 && today < 6
      ? "Het is een werkdag, aan de slag dus."
      : "Het is weekend, even bekomen.")
);
