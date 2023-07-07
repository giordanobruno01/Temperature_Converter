
var lis = document.getElementById("cel");
    lis.addEventListener("click",)
function mouseo(){
    document.getElementById("mouse").innerHTML = "mouse";

}
function converC(){
    var temp = document.getElementById("cel").value;
    
    fah = (temp*1.8)+32;
    kel =  (temp*1) + 273.15;
   
    document.getElementById("test").innerHTML = fah + " Fahrenheit";
    document.getElementById("test1").innerHTML = kel + " Kelvin";
    console.log(fah + " in Console")

    document.getElementById("fah").setAttribute("placeholder",(temp*1.8)+32);
    document.getElementById("kel").setAttribute("placeholder",(temp*1) + 273.15);

}
function converF(){
    var temp = document.getElementById("fah").value;

    cel = (temp - 32)*(5/9);
    kel = (temp - 32)*(5/9)+273.15;
   
    document.getElementById("test2").innerHTML = cel + " Celcius";
    document.getElementById("test3").innerHTML = kel + " Kelvin";

    document.getElementById("cel").setAttribute("placeholder",cel);
    document.getElementById("kel").setAttribute("placeholder",kel);
}
function converK(){
    var temp = document.getElementById("kel").value

    cel = (temp - 273.15);
    fah = (temp - 273.15)*(9/5) + 32;

    document.getElementById("test4").innerHTML = cel + " Celcius";
    document.getElementById("test5").innerHTML = fah + " Fahrenheit";

    document.getElementById("cel").setAttribute("placeholder",temp - 273.15);
    document.getElementById("fah").setAttribute("placeholder",fah);
}