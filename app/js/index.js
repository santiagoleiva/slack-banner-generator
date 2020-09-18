$(document).ready(function () {
    $("#input-text").keyup(function () {
        if ($(this).val()) {
            writeOutput(" " + $(this).val());
        } else {
            clearOutput();
        }
    });

    $("#btn-copy").click(function () {
        $("#output").select();
        document.execCommand("copy");
        $("#notification-copied").fadeIn('fast', function () {
            $(this).fadeToggle(4000);
        });
    });

    $("#input-form").submit(function () {
        return false;
    });
});

function writeOutput(value) {
    Figlet.write(value, "default-font", function (result) {
        $("#output").text(result);
        $("#btn-copy").attr("disabled", false);
    });
}

function clearOutput() {
    $("#output").html("");
    $("#btn-copy").attr("disabled", true);
}