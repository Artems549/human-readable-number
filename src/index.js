module.exports = function toReadable (number) {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let checkNumber = number.toString(10)
    let result;

    if(number === 0) {
        result = `zero`;
    } else if(number < 20) {
        result = `${numbers[number - 1]}`;
    } else if(number < 100) {
        if(number % 10 === 0 && number < 100) {
            result = `${dozens[checkNumber[0] - 2]}`
        } else {
            result = `${dozens[checkNumber[0] - 2]} ${numbers[checkNumber[1] -1]}`;
        }
    } else if(number < 1000) {
        if(number % 100 === 0) {
            result = `${numbers[checkNumber[0] - 1]} hundred`
        } else if(checkNumber[1]  == 0 || checkNumber[1] == 1) {
            result = `${numbers[checkNumber[0] - 1]} hundred ${numbers[checkNumber.slice(1,3) - 1]}`
        } else if(number % 10 === 0) {
            result = `${numbers[checkNumber[0] - 1]} hundred ${dozens[checkNumber[1] - 2]}`
        }else {
            result = `${numbers[checkNumber[0] - 1]} hundred ${dozens[checkNumber[1] - 2]} ${numbers[checkNumber[2] - 1]}`
        }
    }
    return result
}
