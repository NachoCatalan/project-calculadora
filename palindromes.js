const palindromes = function (word) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const palabraLimpia = word.toLowerCase()
                              .split('')
                              .filter((letter) => alfabeto.includes(letter))
                              .join('');

    const invertedWord = palabraLimpia.split('').reverse().join('');
    return palabraLimpia === invertedWord;
};

// Do not edit below this line
module.exports = palindromes;
