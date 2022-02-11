//concat() Method example
function full_Statment() {
    var text_1 = "How to ";
    var text_2 = "write an ";
    var text_3 = "good statment.";
    var whole_statment = text_1.concat(text_2, text_3);
    document.getElementById("Concatenate") .innerHTML = whole_statment;
}

//slice() Method example
function slice_Method() {
    var types = ["String", "Number", "Boolean", "Null", "Symbol", "Undefined"];
    var result = types.slice (4);
    document.getElementById("Slice").innerHTML = result;
}

//toString() Method example
function string_Method() {
    var num = 213;
    document.getElementById("Numbers_to_string").innerHTML = num.toString();
}

//toPrecision() Method example
function precision_Method() {
    var num = 2137.4532754711457554;
    document.getElementById("Precision").innerHTML = num.toPrecision(6);
}