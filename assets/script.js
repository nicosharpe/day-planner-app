// display current date at the top of page/calendar - DONE
// USE UTILITY LIBRARY - DONE
// time blocks for standard business hrs - hmm?
// colour code each time block based on past/present/future when viewed
// allow user to enter an event when they click time block
// save event in local storage when save button is clicked in TB
// PERSIST EVENTS events stay on page after refresh

$(document).ready(function () {
    function displayDate() {
        var today = dayjs().format("HH:mm [on] dddd D MMMM YYYY");
        $("#currentDay").text(today);
    }
    displayDate();

    function timeBlocks() {
        var container = $("#timeblocks-container");

        // Loop from 8am to 6pm (24-hour format)
        for (var hour = 8; hour <= 18; hour++) {

            row = $("<div>").addClass("row");
            container.append(row);

            var hourFormat = dayjs().hour(hour).format("h A");

            var time = $("<div>").addClass("time-block row hour col-1 py-3").text(hourFormat);
            
            row.append(time)

            var textArea = $("<input>").addClass("textarea col-10").text("")
            
            row.append(textArea)

            var saveButton = $("<button>").addClass("saveBtn col-1");
            

            row.append(saveButton);




        }
        
    }
    timeBlocks();







 });