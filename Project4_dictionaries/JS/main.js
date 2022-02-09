function my_Dictionary() {
    var Student = {
        Name:"Mark",
        Surname:"Cahill",
        Year: 2002,
        Class:"Second",
        Subject: "Computer sciance",
    };
    document.getElementById("Dictionary").innerHTML = Student.Surname;
}