$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("id"));
    const id = urlParams.get("id");

    $.ajax({
        type: "GET",
        url: `/api/get/${id}`,
    }).then((todo) => {
        console.log(todo);
        $("#deleteTodoText").text(todo[0].todo_text);
    });


    $("#danger").on("click", function () {
        $.ajax({
            type: "DELETE",
            url: `/delete/${id}`
        }).then((res) => {
            console.log(res);
            window.location.href = "/";
            // $("#deleteTodoText").text = "";
        })

    });
    $("#cancel").on("click", function () {
        window.location.href = "/";
    });
});
