$(document).ready(function () {
    $(".saveBtn").on("click", function () {
       
        var text = document.querySelector(".description").value;

        var time= document.querySelector(".hour").JSON.stringify;
        
        localStorage.setItem (text,time);
        console.log(text,time);
    } 
    ) 

    //function retrieveStorage () {
    //localStorage.getItem (text,time)
    //}
    //console.log(text,time),
    //retrieveStorage();


} )