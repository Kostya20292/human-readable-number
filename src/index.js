module.exports = function toReadable(num) {
    let str = "";

    let numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (num <= 20 || (num < 100 && !(num % 10))) {
        str += numbers[num];
    } else if (num > 20 && num <= 99) {
        str += toReadable(Math.trunc(num / 10) * 10) + " ";
        str += toReadable(num % 10);
    } else if (num >= 100) {
        str += toReadable(Math.trunc(num / 100)) + " hundred";
        if (num % 100) {
            str += " " + toReadable(num % 100);
        }
    }
    return str;
};
