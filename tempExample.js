window.alert("Hello world!");

var fTemp = 40;
var cTemp = 0;


function conversion(fTemp){
  cTemp = (fTemp - 32) * (5/9);
  return cTemp;
}

console.log(conversion(fTemp));


/* console.log(converstion(fTemp));
/* passwords only on the serverside right? how to make sure it is stored before compare */
