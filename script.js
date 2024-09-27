document.getElementById('convert-btn').addEventListener('click', function() {
    const arabicNum = parseInt(document.getElementById('arabic-input').value);
    const romanNumeral = convertToRoman(arabicNum);
    document.getElementById('roman-result').textContent = romanNumeral || 'Invalid Input';
});

function convertToRoman(num) {
    if (num <= 0 || num > 3999) return null; // Limit range for Roman numerals
    const romanLookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    for (let key in romanLookup) {
        while (num >= romanLookup[key]) {
            roman += key;
            num -= romanLookup[key];
        }
    }
    return roman;
}