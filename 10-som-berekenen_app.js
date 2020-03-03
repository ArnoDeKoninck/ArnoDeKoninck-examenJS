//Arno De Koninck Cursus WebDev Examen Exercise 10
//Declerations
let numberArr = new Array();
let result = 0;
//adds the input to the array and print it in the box
function voegToe() {
  let input = parseInt(document.getElementById("input").value);
  let output = document.getElementById("output");
  if (input !== "") {
    //checks empty input
    if (isNaN(input) !== true) {
      // checks for non numbers
      numberArr.push(input); // push value to array

      output.value =
        "Alle cijfers: " + numberArr + "  -juist toegevoegd: " + input;
      input = 0;
      document.getElementById("input").value = "";
    } else output.value = "U heeft geen cijfers ingevuld!";
  } else output.value = "U heeft niets ingevuld!";
}
//Calculates the sum of all array indexes if there are any
function bereken() {
  let output = document.getElementById("output");
  if (numberArr.length > 0) {
    console.log(numberArr);
    for (let i = 0; i < numberArr.length; i++) {
      result += numberArr[i];
      output.value = "Alle cijfers: " + numberArr + "  -som: " + result;
    }
  } else output.value = "U heeft nog geen getallen ingegeven!";
}
