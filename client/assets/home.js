$(document).ready(function () {

    getTodos().then((allTodos) => {
        renderTodos(allTodos);
    });

    $("#buttonSubmit").on("click", function () {
        const text = $("#input").val();
        $("#input").val("");
        $.ajax({
            type: "POST",
            url: "/api",
            data: { todo_text: text },
        }).then((res) => {
            console.log(res);
            window.location.href = "/";
        });
    });
});
const getTodos = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/api",
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => reject(err));
    });
};

const renderTodos = (arr) => {
    $("#card-container").html("");
    arr.forEach((todo) => {
        console.log(todo);
        let message = todo.completed ? "&#10004 Finished todo" : "&#10060 Need to do!";
        $("#card-container").prepend(
            `
             <div class="card mb-2">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted"> ${message}</h6>
                    <p class="card-text">
                        ${todo.todo_text}
                    </p
                    <div class="text-center">
                        <button data-id=${todo.id} class="btn btn-outline-success btnUpdate" style="width:150px">Edit</button>

                        <button data-id=${todo.id}  class="btn btn-outline-danger btnDelete" style="width:150px">Delete</button>
                    </div>

                </div>
            </div>
            `
        );
    });
};

$(document).on("click", ".btnUpdate", function () {
    const todoId = $(this).attr("data-id");
    window.location.href = `/edit?id=${todoId}`;
});

$(document).on("click", ".btnDelete", function () {
    console.log($(this).attr("data-id"));
    const todoId = $(this).attr("data-id");
    window.location.href = `/delete?id=${todoId}`;
});
