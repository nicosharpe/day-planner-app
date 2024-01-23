// display current date at the top of page/calendar - DONE
// USE UTILITY LIBRARY - DONE
// time blocks for standard business hrs - hmm?
// colour code each time block based on past/present/future when viewed
// allow user to enter an event when they click time block
// save event in local storage when save button is clicked in TB
// PERSIST EVENTS events stay on page after refresh

$(document).ready(function () {

    var today = dayjs().format("dddd D MMMM YYYY");
    var todaysTime = dayjs().format("hh:mm a")
    var hour = 8; hour <= 18; hour++
    var hourFormat = dayjs().hour(hour).format("H A");
    var time = $("<div>").addClass("time-block row hour col-1 py-3").text(hourFormat);
    var textArea = $("<input>").addClass("textarea col-10").text("");
    var saveButton = $("<button>").addClass("saveBtn col-1 fa-solid fa-floppy-disk");

    // display todays date
    function displayDate() {

        $("#currentDay").text(today);
        $("#currentTime").text(todaysTime);
    }
    displayDate();

    //create rows for each hour with col elements for time, text and save btn
    function timeBlocks() {

        var container = $("#timeblocks-container");

        // Loop from 8am to 6pm (24-hour format)
        for (let hour = 8; hour <= 18; hour++) {

            var row = $("<div>").addClass("row mx-auto");

            container.append(row);

            var hourFormat = dayjs().hour(hour).format("h A");

            var time = $("<div>").addClass("time-block row hour col-1 py-3").text(hourFormat);

            row.append(time);

            var textArea = $("<input>").addClass("textarea col-10").text("");

            row.append(textArea);

            var saveButton = $("<button>").addClass("saveBtn col-1 fa-solid fa-floppy-disk");

            row.append(saveButton);

            changeColour(hour, textArea);
        }

    }
    timeBlocks();


    function changeColour(hour, textArea) {
        var currentHour = dayjs().hour()

        if (hour < currentHour) {
            textArea.addClass("past").removeClass("present future");
        } else if (hour === currentHour) {
            textArea.removeClass("past future").addClass("present");
        } else {
            textArea.removeClass("past present").addClass("future");
        }
    }











   





});