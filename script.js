function converC() {
  var temp = document.getElementById("cel").value;

  fah = (temp * 1.8 + 32).toFixed(1);
  kel = (temp * 1 + 273.15).toFixed(2);

  document.getElementById("fah").value = fah;
  document.getElementById("kel").value = kel;

  if (temp == "") {
    document.getElementById("fah").value = "";
    document.getElementById("kel").value = "";
  }
  // document.getElementById("fah").setAttribute("value",fah);
  // document.getElementById("kel").setAttribute("value",kel)
}
function converF() {
  var temp = document.getElementById("fah").value;

  cel = ((temp - 32) * (5 / 9)).toFixed(3);
  kel = ((temp - 32) * (5 / 9) + 273.15).toFixed(3);

  document.getElementById("cel").value = cel;
  document.getElementById("kel").value = kel;

  if (temp == "") {
    document.getElementById("cel").value = "";
    document.getElementById("kel").value = "";
  }
  // document.getElementById("cel").setAttribute("value",cel);
  // document.getElementById("kel").setAttribute("value",kel);
}

function converK() {
  var temp = document.getElementById("kel").value;

  cel = (temp - 273.15).toFixed(2);
  fah = ((temp - 273.15) * (9 / 5) + 32).toFixed(2);

  // document.getElementById("test4").innerHTML = cel + " Celcius";
  // document.getElementById("test5").innerHTML = fah + " Fahrenheit";

  document.getElementById("cel").value = cel 
  document.getElementById("fah").value = fah;
  if (temp == "") {
    document.getElementById("cel").value = "";
    document.getElementById("fah").value = "";
  }

  //     document.getElementById("cel").setAttribute("value",temp - 273.15);
  //     document.getElementById("fah").setAttribute("value",fah);
}
// function clearC(){
//     document.getElementById("cel").value =''
//     document.getElementById("fah").value =''
//     document.getElementById("kel").value ='';
// }
