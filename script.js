$(document).ready(function () {

    // VARIABLES ----------------------------------------------

    // LISTENERS ------------------------------------------------

    // FUNCTIONS ------------------------------------------------

    // current date display
    var date = moment().format("dddd MMMM Do, YYYY")
    $("#currentDay").text(date);



    $(".description").each(function () {
        //convert data-hou string to number & declares the variable
        var dataHour = parseInt($(this).attr("id"));

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

    // Save added task into local storage
    $(".saveBtn").on("click", function () {
        // setting a variable for the value of the description
        var userTask = $(this).siblings(".description").val()
        //varibale set key target
        var descriptionEl = $(this).attr("id")
        // set in my local storage for key, value
        localStorage.setItem(descriptionEl, userTask);
        // console.log(userTask)
    });

    // Retrieve the added description from local Storage for display in each description block
    // looping through all the time blocks
    for (var i = 9; i < 18; i++) {
        // gettind the value stored when pressing "#btn" to display in "#task"
        $("#" + i + "task").val(localStorage.getItem(i + "btn"))
        // console.log(i + "task")
        // console.log (i + "btn")
    };







}); 
