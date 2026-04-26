const palindromes = function (string) {
    const cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for (i = 0; i <= cleanString.length; i++) {
        if (cleanString.charAt(i) !== cleanString.charAt(cleanString.length - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
