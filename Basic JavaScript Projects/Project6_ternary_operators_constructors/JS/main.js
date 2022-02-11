function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52) ? "You are mtoo short":"You are tall enough";
    document.getElementById("Ride") .innerHTML = Can_ride + " to ride.";
}


function Dress(color, size, length) {
    this.color = color;
    this.size = size;
    this.lenght = length;
}  
// Create an object
const Dress1 = new Dress("red", 40, "long");
const Dress2 = new Dress("white", 42, "long");
  
// Display the result
function my_Function()  {
    document.getElementById("New_and_This") .innerHTML = 
    "This dress has following color: " + Dress1.color + ", size " + Dress1.size + " and it is " + Dress1.lenght + ".";
}


function count_Function()  {
    document.getElementById("Nested_Function") .innerHTML = Calculate() ;
    function Calculate() {
        var Price = 20;
        function Voucher() {Price -= 5;}
        Voucher() ;
        return Price ;
        }
    }
  
