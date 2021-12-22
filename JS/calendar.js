$(document).ready(function () {


    $(".saveBtn").on("click", function () {


        // Get nearby values of the description in JQuery
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr('id');

        // Store
        localStorage.setItem(time, value);

    });

    function timeBlocks() {
        //getting current time (current number of hours)
        var currentHour = moment().hours();
        //looping over timeblocks
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split("-")[1]);

            //apply if conditionals to past/present/future

            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    timeBlocks();

    var interval = setInterval(timeBlocks, 15000);

    //console.log(saveAppointments);

    $('#hour-9 .description').val(localStorage.getItem());
    $('#hour-10 .description').val(localStorage.getItem());
    $('#hour-11 .description').val(localStorage.getItem());
    $('#hour-12 .description').val(localStorage.getItem());
    $('#hour-13 .description').val(localStorage.getItem());
    $('#hour-14 .description').val(localStorage.getItem());
    $('#hour-15 .description').val(localStorage.getItem());
    $('#hour-16 .description').val(localStorage.getItem());
    $('#hour-17 .description').val(localStorage.getItem());

    $("#currentDay").text(moment().format('dddd, MMMM Do'));



});
