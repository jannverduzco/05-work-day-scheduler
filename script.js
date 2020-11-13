$(document).ready(function () {

    // VARIABLES ----------------------------------------------


    // current date display
    var date = moment().format("dddd MMMM Do, YYYY")
    $("#currentDay").text(date);

    // LISTENERS ------------------------------------------------


    // FUNCTIONS ------------------------------------------------

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
        console.log(userTask)
    });

    // Retrieve added tast from local Storage


    $("#9").val(localStorage.getItem("9btn"))
    $("#10").val(localStorage.getItem("10btn"))
    $("#11").val(localStorage.getItem("11btn"))
    $("#12").val(localStorage.getItem("12btn"))
    $("#13").val(localStorage.getItem("13btn"))
    $("#14").val(localStorage.getItem("14btn"))
    $("#15").val(localStorage.getItem("15btn"))
    $("#16").val(localStorage.getItem("16btn"))
    $("#17").val(localStorage.getItem("17btn"))
   
    // for (let i = 9; i <= 17 ; i++) {
    // var myData = localStorage.getItem()
    //     // $("#" + i + "").val(localStorage.getItem(i ))
    // console.log(myData)
    // }





}); 
