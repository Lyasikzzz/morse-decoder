const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resultTen, resultDuo, result = '', final = '';
    for (let i = 0; i < expr.length;) {
        resultTen = expr.slice(i, i + 10);
        i += 10;
        if (resultTen != "**********") {
            for (let j = 0; j < resultTen.length;) {
                resultDuo = resultTen.slice(j, j + 2);
                j += 2;
                if (resultDuo == "10") {
                    result += ".";  
                } else if (resultDuo == "11") {
                    result += "-";
                } 
            }
            final += MORSE_TABLE[result];
        } else {
            final += " ";
        }
        result = '';
    }
    return final;
}

module.exports = {
    decode
};