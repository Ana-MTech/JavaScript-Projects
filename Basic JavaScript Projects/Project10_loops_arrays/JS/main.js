// Example of function that use a while Loop  
function Call_Loop() {
        var text = "";
        var x = 0;
        while (x < 10) {
          text += "<br>The number is " + x;
          x++;
        }
    document.getElementById("Loop").innerHTML = text;
}

// Example of function that use a for Loop  
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Vionlin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
    document.getElementById("List_of_Instruments") .innerHTML = Content;
    }

// Example of function that use an array 
function array_Function() {   
    var Colour  = [];
    Colour[0]= "red";
    Colour[1]= "yellow";
    Colour[2]= "white";
    document.getElementById("Array").innerHTML = Colour;
}


var x = 10;  // It is a Global Variable  
function add() {  
    var y = 20; //local variable  
    var some = 0;//Local variable  
    for (var i = x; i < y; i++) {  
        some = some + i;  
        document.write(some + "<br> ");  
    }   
}  

     function read() {  
        var y = 30;  //Local Variable  
        for (var i = x; i <= y; i++) {  
            some = some + i;           //some variable has not defend in this function. so it is not local variable. and this code is wrong....  
            console.log(some + "<br> ");  
        }  
    }  

    function checkBlockScope() {
        {
          let x = 30;
          // initial value of x will print here
          document.write('Initial value of x: ' + x);
         
          x = x + 7;	
          // updated value of x will print
          document.write('<br> Value of x inside the block: ' + x);
        }
        // the value of x will not print here
        document.write('<br> Value of x outside the block: ' + x);
      }
      
      checkBlockScope()

// Example of creating an object with properties an method
let dress = {
    model: "girl dress ",
    year: "4 - 6 ",
    color: "pink ",
    manufactured: "2021" ,
    lenght: "short",
    description : function() {
        return "The dress is a " + this.year +  this.color + this.lenght + this.model + this.manufactured;
        }
} ;
document.getElementById("Dress_Object") .innerHTML = dress.description() ;
      
      
    