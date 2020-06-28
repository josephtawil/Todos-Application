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
            todo[0].completed ? $("#completedCheck").prop("checked", true)
                : $("#completedCheck").prop("checked", true);
            $("#editTextInput").prop("placeholder", todo[0].todo_text);
        });


    $("#btnConfirm").on("click", (e) => {
        e.preventDefault();

        const editedText = $("#editTextInput").val()
            ? $("#editTextInput").val()
            : $("#editTextInput").prop("placeholder");

        const completeStatus = $("#completedCheck").prop("checked")
            ? 1
            : 0;

        $.ajax(
            {
                type: "PATCH",
                url: "/api",
                data: { todo_text: editedText, id: id, completed: completeStatus },
            }).then((res) => {
                console.log(res);
                window.location.href = "/";

            }).catch((err) => console.log(err));
    });
});