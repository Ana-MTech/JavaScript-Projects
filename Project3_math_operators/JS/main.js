function myFunction() {
    var y = document.getElementById("txt1").value;
    var z = document.getElementById("txt2").value;
    var x = +y + +z;
    document.getElementById("demo").innerHTML = x;
}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 7 - 2;
    document.getElementById("Math").innerHTML = "7 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 4 * 2;
    document.getElementById("Math").innerHTML = "4 x 2 = " + simple_Math;
}

function division() {
    var simple_Math = 20 / 2;
    document.getElementById("Math").innerHTML = "20 / 2 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (10 + 2) * 10 / 5 -3;
    document.getElementById("Math").innerHTML = "10 plus 2, multiplied by 10,
    divided by 4 and than subtracted by 3 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 5;
    document.getElementById("Math").innerHTML = "When you divide 25 by 5 you
    have a remainder of: "  + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 7;
    document.getElementById("Math").innerHTML = "When you divide 25 by 7 you
    have a remainder of: "  + simple_Math;
}

function negation_Operator() {
    var x = 5;
    document.getElementById("Math").innerHTML = - x;
}

var X = 5;
X++;
document.write(X) ;

var X = 5.75;

X--;
document.write(X) ;

window.alert (Math.random() * 50 ) ; 




