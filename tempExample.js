

var fTemp = 0;
var cTemp = 0;
var choice = window.prompt("What temperature would you like to convert? Type in C or F.", "");

if (choice === "C"){
var fTemp = window.prompt("How hot is it in F?")
  function conversionf(fTemp){
    cTemp = (fTemp - 32) * (5/9);
    return cTemp;
  }
window.alert("Your current temp in F is exactly "+ conversionf(fTemp)+" degrees C.");
}

else if (choice === "F"){
  var cTemp = window.prompt("How hot is it in C?")
  function conversionc(cTemp){
    fTemp = (cTemp * 5/9) + 32;
    return fTemp;
  }
window.alert("Your current temp in F is exactly "+ conversionc(cTemp)+" degrees F.");
}

else if (choice !== "F" && choice !== "C"){
  window.alert("Nope!");
}



/*
console.log("The temperature in Celcius is "+conversionf(fTemp)+".");
console.log("The temperature in Fahrenheit is "+ conversionc(cTemp)+".");
*/

/* add user prompt in there too */

/* console.log(converstion(fTemp));
/* passwords only on the serverside right? how to make sure it is stored before compare */

/* radio button prompt? */
/* if cel then */
