function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 7 - 2;
    document.getElementById("Math1").innerHTML = "7 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 4 * 2;
    document.getElementById("Math2").innerHTML = "4 x 2 = " + simple_Math;
}

function division() {
    var simple_Math = 20 / 2;
    document.getElementById("Math3").innerHTML = "20 / 2 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (10 + 2) * 10 / 5 -3;
    document.getElementById("Math4").innerHTML = "10 plus 2, multiplied by 10, divided by 4 and than subtracted by 3 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 7;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 7 you have a remainder of: "  + simple_Math;
}

function negation_Operator() {
    var x = 5;
    document.getElementById("Math6").innerHTML = - x;
}

var x = 5, y = 10;
document.write("<b>---Increment operator example---</b>");
document.write("<br \> Value of x : "+ x); //Original Value
document.write("<br \> Value of x : "+ x++); // Using increment Operator
document.write("<br \> Value of x : "+ x + "<br \>"); //Incremented value

document.write("<b>---Decrement operator example---</b>");
document.write("<br \> Value of y : "+ y); //Original Value
document.write("<br \> Value of y : "+ y--); // using decrement Operator
document.write("<br \> Value of y : "+ y); //decremented value 

// Returns a random number:
window.alert (Math.random() * 50 ) ; 




