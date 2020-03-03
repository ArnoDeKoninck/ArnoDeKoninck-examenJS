//Arno De Koninck Cursus WebDev Examen Exercise 07
//Declerations

function berekenHoeveelheid() {
  let geboortejaar = prompt("Wat is uw geboortejaar?", "1996");
  let estimate = prompt("Hoe oud denkt u te worden in jaar?", "90");
  let aantal = prompt("Hoeveel kopjes koffie drinkt u ongeveer per dag?", "3");
  let leeftijd = new Date().getFullYear() - geboortejaar;

  let result = aantal * ((estimate - leeftijd) * 365); // (years from now till estimated death(in years so) * 365 days each year(in days now)) * amount of cups per day
  document.write(
    //writes the data string on the screen
    "Je bent nu " +
      leeftijd +
      ". Tegen " +
      aantal +
      " kopjes koffie per dag zal je " +
      result +
      " kopjes koffie drinken als je " +
      estimate +
      " jaar oud zal worden."
  );
}
//calls the function on launch
berekenHoeveelheid();
