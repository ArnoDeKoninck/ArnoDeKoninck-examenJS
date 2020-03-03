//Arno De Koninck Cursus WebDev Examen Exercise 09
//Declerations
let alfabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""); //makes an alphabet array
let alfabetScore = [
  1,
  3,
  3,
  2,
  1,
  4,
  2,
  4,
  1,
  8,
  5,
  1,
  3,
  1,
  1,
  3,
  10,
  1,
  1,
  1,
  1,
  4,
  4,
  8,
  4,
  10
];
let input = prompt(
  "Van welk woord wilt u de Scrabbel score berekenen?",
  "banaan"
).toUpperCase();
let result = 0;
document.write("<h1>Scrabbel punten berekenaar</h1>");
input = input.split("");
if (input !== null) {
  //checks cancel
  if (input !== "") {
    //checks empty
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < alfabet.length; j++) {
        if (input[i] === alfabet[j]) {
          document.write(
            "<br>" + alfabet[j] + " - " + alfabetScore[j] + "<br>"
          );
          result += parseInt(alfabetScore[j]);
        } else {
          alert("U mag alleen letters van het alfabet gebruiken!"); //If content is not in alphabet alerts and cancels
          break;
        }
      }
    }
    document.write("<br>Totaal: " + result + " punten.");
  } else document.write("U moet iets invullen");
} else document.write("U heeft geanuleerd");
