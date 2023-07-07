
var lis = document.getElementById("cel");
    lis.addEventListener("click",)
function mouseo(){
    document.getElementById("mouse").innerHTML = "mouse";

}
function converC(){
    var temp = document.getElementById("cel").value;
    
    fah = (temp*1.8)+32;
    kel =  (temp*1) + 273.15;
   
    // document.getElementById("test").innerHTML = fah + " Fahrenheit";
    // document.getElementById("test1").innerHTML = kel + " Kelvin";
    // console.log(fah + " in Console")
document.getElementById("fah").value = fah
document.getElementById("kel").value = kel
    // document.getElementById("fah").setAttribute("value",fah);
    // document.getElementById("kel").setAttribute("value",kel)

}
function converF(){
    var temp = document.getElementById("fah").value;

    cel = (temp - 32)*(5/9);
    kel = (temp - 32)*(5/9)+273.15;
   
    // document.getElementById("test2").innerHTML = cel + " Celcius";
    // document.getElementById("test3").innerHTML = kel + " Kelvin";
document.getElementById("cel").value = cel
document.getElementById("kel").value = kel
    // document.getElementById("cel").setAttribute("value",cel);
    // document.getElementById("kel").setAttribute("value",kel);
}

function converK(){
    var temp = document.getElementById("kel").value

    cel = (temp - 273.15);
    fah = (temp - 273.15)*(9/5) + 32;

    // document.getElementById("test4").innerHTML = cel + " Celcius";
    // document.getElementById("test5").innerHTML = fah + " Fahrenheit";
document.getElementById("cel").value = cel
document.getElementById("fah").value = fah
console.log("calling convertK")

//     document.getElementById("cel").setAttribute("value",temp - 273.15);
//     document.getElementById("fah").setAttribute("value",fah);
}
function clearC(){
    document.getElementById("cel").value ='';
    ;
}
function clearF(){
document.getElementById("fah").value =''
}
function clearK(){
    document.getElementById("kel").value ='';
}