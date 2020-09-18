$(document).ready(function () {
    $("#input-text").keyup(function () {
        if ($(this).val()) {
            $("#output").figlet(" " + $(this).val());
            $("#btn-copy").attr("disabled", false);
        } else {
            $("#output").html("");
            $("#btn-copy").attr("disabled", true);
        }
    });

    $("#btn-copy").click(function () {
        $("#output").select();
        document.execCommand("copy");
    });

    $("#input-form").submit(function (event) {
        return false;
    });
});