$(document).ready(function () {
    $(".saveBtn").on("click", function () {
       
        $(".saveBtn").on("click", function () {
            // Get nearby values of the description in JQuery
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr('id');

            window.localStorage.setItem("appointment",text);
            window.localStorage.setItem("hour", time);

            
            console.log(text);
            console.log(time);
            window.localStorage.getItem("appointment");
            window.localStorage.getItem("hour");
    
            // Save text in local storage
         
      

        
       

      //const returnedData=localStorage.getItem(text,time);
            
         } )

         
        
    
    }  ) } )
 
    $('').html(window.localStorage.getItem('content'));