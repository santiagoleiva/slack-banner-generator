var bgChar = ".";
var textChar = "#";

var defaultBGEmoji = ":white_square:";
var defaultTextEmoji = ":black_square:";

new Vue({
    el: "#banner-app",
    data: {
        title: "Slack banner generator",
        input: "",
        output: "",
        displayCopiedMessage: false,
        bgEmoji: defaultBGEmoji,
        textEmoji: defaultTextEmoji
    },
    methods: {
        handleInputChange: function () {
            var newOutput = "";

            if (this.input) {
                let bgEmoji = this.bgEmoji;
                let textEmoji = this.textEmoji;
                var input = " " + this.input;

                Figlet.write(input, "hash-default-font", function (output) {
                    newOutput += output;
                    newOutput = newOutput.replaceAll(bgChar, bgEmoji);
                    newOutput = newOutput.replaceAll(textChar, textEmoji);
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
        },
        onBGEmojiChange: function () {
            if (this.bgEmoji) {
                var bgEmoji = this.bgEmoji;
                var textEmoji = this.textEmoji;
                var newOutput = "";
                var input = " " + this.input;
                Figlet.write(input, "hash-default-font", function (output) {
                    newOutput += output;
                    newOutput = newOutput.replaceAll(bgChar, bgEmoji);
                    newOutput = newOutput.replaceAll(textChar, textEmoji);
                });
                this.output = newOutput;
            }
        },
        onTextEmojiChange: function () {
            if (this.textEmoji) {
                var bgEmoji = this.bgEmoji;
                var textEmoji = this.textEmoji;
                var newOutput = "";
                var input = " " + this.input;
                Figlet.write(input, "hash-default-font", function (output) {
                    newOutput += output;
                    newOutput = newOutput.replaceAll(bgChar, bgEmoji);
                    newOutput = newOutput.replaceAll(textChar, textEmoji);
                });
                this.output = newOutput;
            }
        }
    }
});