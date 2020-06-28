$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("id"));
    const id = urlParams.get("id");

    $.ajax(
        {
            type: "GET",
            url: `/api/get/${id}`,
        }).then((todo) => {
            console.log(todo);
            todo[0].completed ? $("#completed").prop("checked", true)
                : $("#completed").prop("checked", true);
            $("#editTextInput").prop("placeholder", todo[0].todo_text);
        });

    $("#btnConfirm").on("click", function () {
        $.ajax(
            {
                type: "PATCH",
                url: "/api",

            }).then((res) => {
                console.log(res);
            });
    });
});