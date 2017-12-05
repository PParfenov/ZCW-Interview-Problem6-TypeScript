var BootCampTime = /** @class */ (function () {
    function BootCampTime() {
        this.wordMap = {
            0: "",
            1: "One",
            2: "Two",
            3: "Three",
            4: "Four",
            5: "Five",
            6: "Six",
            7: "Seven",
            8: "Eight",
            9: "Nine",
            10: "Ten",
            11: "Eleven",
            12: "Twelve",
            13: "Thirteen",
            14: "Fourteen",
            15: "Fifteen",
            16: "Sixteen",
            17: "Seventeen",
            18: "Eighteen",
            19: "Nineteen",
            20: "Twenty",
            30: "Thirty",
            40: "Forty",
            50: "Fifty",
        };
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }
    BootCampTime.prototype.getAndConvertTime = function () {
        var input = this.userInputEle.value;
        if (/\d?\d:\d{2}[a|p]m/gi.test(input)) {
            this.displayEle.innerHTML += this.convertFromNormalToBootCampTime(input);
        }
        else {
            this.displayEle.innerHTML += "<br/>Try again, bucko.";
        }
    };
    BootCampTime.prototype.convertFromNormalToBootCampTime = function (input) {
        return "<br/>" + this.convertToString(this.militarizeTime(input)) +
            "<br/>Please enter another time in hh:mm[am/pm] format.";
    };
    BootCampTime.prototype.convertToString = function (militarizedTime) {
        var hours = this.twoDigitToString(militarizedTime.substring(0, 2));
        var minutes = this.twoDigitToString(militarizedTime.substring(3));
        return hours + " Hundred and " + minutes + " Hours";
    };
    BootCampTime.prototype.twoDigitToString = function (twoDigit) {
        var output = "";
        var tens = twoDigit.charAt(0);
        var ones = twoDigit.charAt(1);
        if ("0" == tens) {
            output += "Zero ";
            output += this.wordMap[Number(ones)];
            return output;
        }
        if ("1" == tens) {
            output = this.wordMap[Number(twoDigit)];
            return output;
        }
        output += this.wordMap[Number(tens + "0")] + " ";
        output += this.wordMap[Number(ones)];
        return output;
    };
    BootCampTime.prototype.militarizeTime = function (normalTime) {
        var output = "";
        var colonIndex = normalTime.indexOf(":");
        if (/.*pm/gi.test(normalTime)) {
            var hours = Number(normalTime.substring(0, colonIndex)) + 12;
            if (hours == 24) {
                output = "00" + normalTime.substring(colonIndex, colonIndex + 3);
            }
            else {
                output = hours + normalTime.substring(colonIndex, colonIndex + 3);
            }
        }
        else {
            output = normalTime.substring(0, colonIndex + 3);
            if (output.indexOf(":") == 1) {
                output = "0" + output;
            }
        }
        return output;
    };
    return BootCampTime;
}());
/// <reference path="BootCampTime.ts" />
var bootCampTime = new BootCampTime();
//# sourceMappingURL=app.js.map