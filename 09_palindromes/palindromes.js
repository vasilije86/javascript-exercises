const palindromes = function (string) {
    const alphanum = 'qwertyuiopasdfghjklzxcvbnm1234567890';
    const cleanString = string
        .toLowerCase()
        .split("")
        .filter((char) => alphanum.includes(char))
        .join('');
    const reversedString = cleanString.split('').reverse().join('');

    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
