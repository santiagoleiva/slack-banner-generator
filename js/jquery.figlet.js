(function ($) {

    Figlet.loadFont = function (name, fn) {
        $.ajax({
            url: "fonts/" + name + ".flf",
            dataType: "text",
            success: fn
        });
    };

    $.fn.figlet = function (text, font) {
        var elems = this;
        Figlet.write(text, font || $.fn.figlet.defaultFont, function (str) {
            elems.text(str);
        });
        return this;
    };

    $.fn.figlet.defaultFont = "custom-font";

})(jQuery);