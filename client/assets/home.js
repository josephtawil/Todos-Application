$(document).ready(function () {
    $.ajax(
        {
            method: "GET",
            url: "/api",
        }).then((res) => console.log(res));
});