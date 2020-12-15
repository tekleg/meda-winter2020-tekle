const base_url = "http://localhost:3000/";

$(document).ready(() => {

    $.post(base_url + "getList", {}, (data) => {
        console.log(data.list);

        for (let i = 0; i < data.list.length; i++) {
            addToList(data.list[i]);
        }

        refreshDeleteButtons()
    });

    $("#submit").click(() => {

        let priorityNumber = $("#note-priority option:selected").attr("value");

        priorityNumber = parseInt(priorityNumber);

        let noteObject = {
            author: null,
            title: $("#note-title").val(),
            text: $("#note-text").val(),
            completed: false,
            archived: false,
            priority: priorityNumber,
            categories: null,
            timestamp: Date.now()
        }

        $("#submit").attr("disabled", "disabled");
        $("#loading-icon").fadeIn(600);
        
        $.post(base_url + "newNote", noteObject, (data) => {
            console.log(data.saved);
            if (data.saved === true) {
                setTimeout(() => {
                    $("#submit").removeAttr("disabled");
                    $("#loading-icon").fadeOut(600);
                    $("#submit-message").text("Successfully saved " + noteObject.title);
                    $("#submit-message").fadeIn(600);

                    addToList(data.savedTask);
                    refreshDeleteButtons()

                    setTimeout(() => {
                        $("#submit-message").fadeOut(600, () => {
                            $("#submit-message").text("");
                        });
                    }, 4000);
                }, 1200);
            }
        });
        
    });

});


function addToList(taskObject) {
    const html = `
        <tr data-task-id="${taskObject._id}">
            <td>${taskObject.priority}</td>
            <td>${taskObject.title}</td>
            <td>${taskObject.text}</td>
            <td><button>Delete</button></td>
            <td><img src="images/822.gif" width="22" height="22" alt="Loading Icon" /></td>
        </tr>
    `;

    $("#tasks tbody").append(html);
}

function refreshDeleteButtons() {

    // Remove any previously existing click event handlers.
    $("#tasks tbody tr td button").off();
    
    // Update selector to avoid selecting the update button.
    $("#tasks tbody tr td button").click(function () {
        // Pass the JavaScript object that was pressed on to the jQuery selector.

        $(this).attr("disabled", "disabled");

        $(this).parent().next().children("img").fadeIn(600);

        let taskID = $(this).parent().parent().attr("data-task-id");

        let actionObject = {
            id: taskID,
            action: "delete",
            data: null
        }

        $.post(base_url + "modify", actionObject, (data) => {
            
            setTimeout(() => {
                $(this).parent().parent().fadeOut(600);
            }, 1200);
        });
        
    });
}