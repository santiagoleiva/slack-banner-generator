new Vue({
    el: "#banner-app",
    data: {
        title: "Slack banner generator",
        input: "",
        output: ""
    },
    methods: {
        handleInputChange: function () {
            var newOutput = "";

            if (this.input) {
                var input = " " + this.input;
                Figlet.write(input, "default-font", function (output) {
                    newOutput += output;
                })
            }

            this.output = newOutput;
        },
        copyOutput: function () {
            document.querySelector("#output").select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error("Error copying selection");
            }
        }
    }
});