$(document).ready(function () {


    // VARIABLES ----------------------------------------------
    var userTask = "";

    // current date display
    var date = moment().format("dddd MMMM Do, YYYY")
    $("#currentDay").text(date);


    // LISTENERS ------------------------------------------------

 
    // FUNCTIONS ------------------------------------------------

    $(".description").each(function () {
        //convert data-hou string to number & declares the variable
        var dataHour = parseInt($(this).attr("data-hour"));
        // declares hour from moment.js format to currentTime
        var currentTime = moment().format("H");
        // compares moment.js current time hour to data-hour string to set past
        if (currentTime > dataHour) {
            $(this).addClass("past")
        }
         // compares moment.js current time hour to data-hour string to set present &removes previous set class
        else if (currentTime == dataHour) {
            $(this).addClass("present")
            $(this).removeClass("past")
        }
        // add furute class for what else applies to & removes previous set classes
        else {
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
        }
    })


      
    // $(this).siblings(".description").val()
    $(".saveBtn").on("click", function () {
        userTask.text
    });




}); 
