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
        $("#notification-copied").fadeIn('fast', function() {
            $(this).fadeToggle(4000);
        });
    });

    $("#input-form").submit(function (event) {
        return false;
    });
});