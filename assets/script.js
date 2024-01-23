$(document).ready(function () {
    var today = dayjs().format("dddd D MMMM YYYY");
    var todaysTime = dayjs().format("h:mm a");

    function displayDate() {
        $("#currentDay").text(today);
        $("#currentTime").text(todaysTime);
    }
    displayDate();

    function timeBlocks() {
        var container = $("#timeblocks-container");

        for (let hour = 8; hour <= 18; hour++) {
            var row = $("<div>").addClass("row mx-auto");
            container.append(row);

            var hourFormat = dayjs().hour(hour).format("h A");
            var time = $("<div>").addClass("time-block row hour col-1 py-3").text(hourFormat);
            row.append(time);
            var textArea = $("<input>").addClass("textarea col-10").attr("id", hour);
            row.append(textArea);
            var saveButton = $("<button>").addClass("saveBtn col-1 fa-solid fa-floppy-disk");
            row.append(saveButton);

            changeColour(hour, textArea);
            loadSavedEvents(hour, textArea);

            // Set the hour value as a data attribute
            saveButton.data("hour", hour);

console.log(textArea);


            saveButton.on("click", function () {
                var id= $(textArea).attr("id")
                console.log(id);
             
                console.log(textArea.val())
                // Retrieve the hour value from the data attribute
                var clickedHour = $(this).data("hour");
                saveEvent(clickedHour, textArea.val());
                console.log(clickedHour);
            });
        }
    }
    timeBlocks();

    function changeColour(hour, textArea) {
        var currentHour = dayjs().hour();

        if (hour < currentHour) {
            textArea.addClass("past").removeClass("present future");
        } else if (hour === currentHour) {
            textArea.removeClass("past future").addClass("present");
        } else {
            textArea.removeClass("past present").addClass("future");
        }
    }

    function saveEvent(hour, eventText) {
        
        var events = JSON.parse(localStorage.getItem("events")) || [];

        var existingEvent = events.find(function (event) {

            return event.hour === hour;
        });

        if (existingEvent) {
            existingEvent.text = eventText;
        } else {
            events.push({ hour: hour, text: eventText });
        }

        localStorage.setItem("events", JSON.stringify(events));
    }

    function loadSavedEvents(hour, textArea) {
        var events = JSON.parse(localStorage.getItem("events")) || [];
        var event = events.find(function (event) {
            return event.hour === hour;
        });

        if (event) {
            textArea.val(event.text);
        }
    }


});
