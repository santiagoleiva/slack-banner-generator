var bgChar = ".";
var textChar = "#";

var defaultBGEmoji = ":white_square:";
var defaultTextEmoji = ":black_square:";

var defaultFont = "hash-default-font";

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
            this.handleChange(this.input);
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
            this.handleChange(this.bgEmoji);
        },
        onTextEmojiChange: function () {
            this.handleChange(this.textEmoji);
        },
        handleChange: function (condition) {
            if (condition) {
                var newOutput = "";

                var bgEmoji = this.bgEmoji;
                var textEmoji = this.textEmoji;
                var input = " " + this.input;

                Figlet.write(input, defaultFont, function (output) {
                    newOutput += output;
                    newOutput = newOutput.replaceAll(bgChar, bgEmoji);
                    newOutput = newOutput.replaceAll(textChar, textEmoji);
                });

                this.output = newOutput;
            }
        }
    }
});