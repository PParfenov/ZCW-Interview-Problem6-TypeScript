class BootCampTime{

    displayEle:any;
    userInputEle:any;

    wordMap: { [key: number]: string; } = {
        0: "",
        1:  "One",
        2:  "Two",
        3:  "Three",
        4:  "Four",
        5:  "Five",
        6:  "Six",
        7:  "Seven",
        8:  "Eight",
        9:  "Nine",
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
    
    constructor(){
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input")
    }

    getAndConvertTime(): void{
        let input: string = this.userInputEle.value;
        if(/\d?\d:\d{2}[a|p]m/gi.test(input)){
            this.displayEle.innerHTML += this.convertFromNormalToBootCampTime(input);
        } else {
            this.displayEle.innerHTML += "<br/>Try again, bucko.";
        }
    }

    convertFromNormalToBootCampTime(input: string): string {
        return "<br/>"+this.convertToString(this.militarizeTime(input)) +
            "<br/>Please enter another time in hh:mm[am/pm] format.";
    }

    convertToString(militarizedTime: string): string {
        let hours: string = this.twoDigitToString(militarizedTime.substring(0,2));
        let minutes: string = this.twoDigitToString(militarizedTime.substring(3));
        return hours+" Hundred and "+minutes+" Hours";
    }

    twoDigitToString(twoDigit: string): string {
        let output: string = "";
        let tens: string = twoDigit.charAt(0);
        let ones: string = twoDigit.charAt(1);

        if("0" == tens){
            output += "Zero ";
            output += this.wordMap[Number(ones)];
            return output;
        }

        if("1" == tens){
            output = this.wordMap[Number(twoDigit)];
            return output;
        }

        output += this.wordMap[Number(tens+"0")]+" ";

        output += this.wordMap[Number(ones)];

        return output;
    }

    militarizeTime(normalTime: string): string{
        let output: string = "";
        let colonIndex: number = normalTime.indexOf(":");
        if(/.*pm/gi.test(normalTime)){
            let hours: number = Number(normalTime.substring(0, colonIndex))+12;
            if(hours == 24){
                output = "00"+normalTime.substring(colonIndex, colonIndex+3);
            } else {
                output = hours + normalTime.substring(colonIndex, colonIndex+3);
            }
        } else {
            output = normalTime.substring(0, colonIndex+3);
            if(output.indexOf(":") == 1){
                output = "0" + output;
            }
        }
        return output;
    }
}
