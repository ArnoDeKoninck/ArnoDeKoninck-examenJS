//Arno De Koninck Cursus WebDev Examen Exercise 04
//Declerations
let voornaam = prompt("Wat is uw voornaam?", "Bart");
let achternaam = prompt("Wat is uw familienaam?", "Peeters");
let fullname = voornaam + " " + achternaam;
let fullnameLength = fullname.length;
let filename = "javaScriptFrameWork";
let substring1 = filename.toLowerCase().substring(0, 10);
let substring2 = filename.toLowerCase().substring(10, filename.length);
let fifthChar = filename.toLowerCase().charAt(5);

//Writes on the screen
document.write(
  //Writes the greeting
  "Hallo, " +
    fullname +
    ".<br>" +
    //Writes the length of your full name
    "<br>Jouw naam bevat: " +
    fullnameLength +
    " karaters.<br>" +
    //Write the filename
    "<br>De originele filename is: " +
    "'" +
    filename +
    "' <br>" +
    //Writes in lowercase
    "<br>De filename kan beter in kleine letters getypt worden, dus: " +
    "'" +
    filename.toLowerCase() +
    "' <br>" +
    //Divides a string in two parts with Substring
    "<br>Als je " +
    "'" +
    filename.toLowerCase() +
    "'" +
    " opsplitst, krijg je: " +
    "'" +
    substring1 +
    "'" +
    " en " +
    "'" +
    substring2 +
    "'.<br>" +
    //Writes the 6th character of the variable on the screen
    "<br>Het zesde karakter (volgens mensen) in " +
    "'" +
    filename.toLowerCase() +
    "'" +
    " is: " +
    "'" +
    fifthChar +
    "'"
);
