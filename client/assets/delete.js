$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("id"));
    const id = urlParams.get("id");

    $("#danger").on("click", function () {
        $.ajax({
            type: "DELETE",
            url: `/delete/${id}`
        }).then((res) => {
            console.log(res);
        })

    });
});
