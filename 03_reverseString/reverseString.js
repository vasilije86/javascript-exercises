const reverseString = function(string) {
    let r = ""
    while (string.length > 0) {
        r += string[string.length -1]
        string = string.substring(0, string.length -1)
    }
    return r
};

// Do not edit below this line
module.exports = reverseString;
