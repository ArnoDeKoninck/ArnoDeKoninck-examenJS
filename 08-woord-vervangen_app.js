//Arno De Koninck Cursus WebDev Examen Exercise 08
//Declerations

function vervangWoord() {
  let word = document.getElementById("word").value;
  word.replace(/\s+/g, " "); //Gets the value of the first input box and deletes any spaces
  let sentence = document.getElementById("sentence").value;
  let output = "";
  let newWord = document.getElementById("newWord").value; //Gets the value of the second input box and deletes any spaces
  newWord.replace(/\s+/g, " ");

  if (sentence.search(word) != -1) {
    //If search() finds the word in the sentence this block is executed, if not search will return(-1) and the exception is executed
    console.log(newWord);
    output =
      sentence.substring(0, sentence.search(word)) +
      newWord +
      sentence.substring(sentence.search(word) + word.length, sentence.length); //substring everything before and after the found word and insert the new word in it's position.
    document.getElementById("output").value = output;
  } else
    document.getElementById("output").value = "Dit woord is niet gevonden!";
}
