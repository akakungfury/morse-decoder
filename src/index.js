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
    '**********': ' '
};

// function decode(expr) {
//     let splittedExpr = expr.split('**********');
//     let result = '';

//     let decodeOneWord = (encodedWord) => {
//         if (encodedWord.length === 0) {
//             result += ' ';
//             return;
//         } else {
//             let firstSymbol = encodedWord.substring(0, 10);
//             encodedWord = encodedWord.substring(10);

//             let morseSymbol = firstSymbol.replace(/00/g, '')
//                                         .replace(/10/g, '.')
//                                         .replace(/11/g, '-');

//             result += MORSE_TABLE[morseSymbol];

//             return decodeOneWord(encodedWord);
//         }
//     }

//     splittedExpr.forEach(el => decodeOneWord(el));

//     return result.trim();
// }

function decode(expr) {
    let encodedSymbolsArr = [];

    for (let i = 0; i < expr.length; i += 10) {
        encodedSymbolsArr.push(expr.slice(i, i + 10));
    }

    let morseCharsArr = encodedSymbolsArr.map(el => el.replace(/00/g, '')
        .replace(/11/g, '-')
        .replace(/10/g, '.')
    );

    let result = morseCharsArr.map(el => MORSE_TABLE[el]).join('');

    return result;
}

module.exports = {
    decode
}