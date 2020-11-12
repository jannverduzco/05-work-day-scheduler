$(document).ready(function () {

    // VARIABLES ----------------------------------------------
    
   
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


      
    // save added tasks
    $(".saveBtn").on("click", function () {
    var userTask = $(this).siblings(".description").val()
    var descriptionEl = $(this).attr("id")
    // console.log(descriptionEl)
    localStorage.setItem(descriptionEl , userTask);
    console.log(userTask)
    });

    for (let i = 9; i <= 17 ; i++) {
        $("#" + i + "des").val(localStorage.getItem(i))
        // console.log(i)
    }

   

}); 
