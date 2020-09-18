var defaultBGChar = ".";
var defaultTextChar = "#";

var defaultBGEmoji = ":white_square:";
var defaultTextEmoji = ":black_square:";

new Vue({
    el: "#banner-app",
    data: {
        title: "Slack banner generator",
        input: "",
        output: "",
        displayCopiedMessage: false
    },
    methods: {
        handleInputChange: function () {
            var newOutput = "";

            if (this.input) {
                var input = " " + this.input;
                Figlet.write(input, "hash-default-font", function (output) {
                    newOutput += output;
                    newOutput = newOutput.replaceAll(defaultBGChar, defaultBGEmoji);
                    newOutput = newOutput.replaceAll(defaultTextChar, defaultTextEmoji);
                })
            }

            this.output = newOutput;
        },
        copyOutput: function () {
            document.querySelector("#output").select();
            try {
                document.execCommand('copy');
                this.displayCopiedMessage = true;
            } catch (err) {
                console.error("Error copying selection");
            }
        },
        closeCopiedMessage: function () {
            this.displayCopiedMessage = false;
        }
    }
});