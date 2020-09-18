var app = new Vue({
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
                Figlet.write(this.input, "default-font", function (output) {
                    newOutput = " " + output;
                })
            }

            this.output = newOutput;
        }
    }
});