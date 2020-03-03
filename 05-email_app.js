//Arno De Koninck Cursus WebDev Examen Exercise 05
//Declerations
let email = "jan.klaassen@mail.com";
let indexOfAd = email.indexOf("@");
let emailname = email.toLowerCase().substring(0, indexOfAd); //Takes everything infront of the @ and accepts it as the name.

//Writes on the screen
document.write(
  //Writes the name out of the email
  "De naam is: " +
    "'" +
    emailname +
    "'.<br>" +
    //Writes the position of @ in the email
    "<br>In " +
    "'" +
    email +
    "'" +
    " staat de @ op positie: " +
    indexOfAd +
    ".<br>" +
    ""
);
