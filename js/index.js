$(document).ready(function () {
    $("#input-text").keyup(function () {
        var value = " " + $(this).val();
        $("#output").figlet(value);
    });

    $("#btn-copy").click(function () {
        $("#output").select();
        document.execCommand("copy");
    });

    $("#input-form").submit(function (event) {
        return false;
    });
});