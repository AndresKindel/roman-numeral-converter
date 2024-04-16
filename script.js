const input = document.getElementById('input');
const button = document.getElementById('convert');
const result = document.getElementById('result');
const output = document.getElementById('output');

function convertToRoman(num) {
    const romanNumeral = {
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
        I: 1,
    };
    
    let result = '';
    
    for (let key in romanNumeral) {
        while (num >= romanNumeral[key]) {
            result += key;
            num -= romanNumeral[key];
        }
    }
    
    return result;
    
}

button.addEventListener('click', () => {
    output.style.fontSize = '3rem';
    const inputValue = input.value;
    if (inputValue === '') {
        result.innerHTML = 'Please enter a number';
        output.style.fontSize = '1.2rem';
    } else if (inputValue > 3999) {
        result.innerHTML = 'Please enter a number less than or equal to 3999';
        output.style.fontSize = '1.2rem';
    } else {
        const convertedValue = convertToRoman(inputValue);
        result.innerHTML = convertedValue;
    }
    output.style.display = 'flex';
});