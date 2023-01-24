function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i <str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join('');
}
const queryString = window.location.search;
console.log(queryString);

if(queryString.length > 0){
  const urlParams = new URLSearchParams(queryString);
  let myData = "";
  let myCart = "";
  let myTotal = 0;


myCart += "<h3>Cart Contents</h3>";
urlParams.forEach(function(value, key) {
 
  if(key == "Cart"){//process cart
    alert("Cart Item: " + value);

    switch(value){
      case "Widget":
          myData += "Widget: $3.99<br>";
          myTotal += 3.99;
      break;

      case "Sprocket":
          myData += "Sprocket: $5.99<br>";
          myTotal += 5.99;
      break;

      case "Thingy":
          myData += "Thingy: $1.99<br>";
          myTotal += 1.99;
      break;

    }
   
  }else{//shipping label
    key = key.split("_").join(" ");

    if(key == "First Name"|| key == "Last Name"){
        value = titleCase(value);
    }
    myData += '<p>${key}: ${value}</p>';
  }

});
myData += "Total: " + myTotal + '<br>';

myData = myCart + myData;

myData += '<p><a href="index.html">CLEAR</a></p>';
document.getElementById("output").innerHTML = myData;
}