    function get_Date() {
        if (new Date().getHours() > 22)  {
        document.getElementById("My_Function") .innerHTML = "Time to rest. Good night!";
        }
        else if (new Date().getHours() < 10) {
        document.getElementById("My_Function") .innerHTML = "Time to get up! Good morning!";
        }
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

        function Time_function() {
            var Time = new Date() .getHours() ;
            var Reply;            
            if (Time < 12 == Time > 0) {
                Reply = "It is morning time!";
            }
            else if (Time > 12 == Time < 17) {
                Reply = "It is afternoon";
            }
            else {
                Reply = "It is evening time!";
            }
            document.getElementById("Time_of_day") .innerHTML = Reply;
        }

