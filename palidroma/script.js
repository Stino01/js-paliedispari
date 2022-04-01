// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
let word = prompt('Scrivi una parola qualsiasi');
console.log('word');

function palidroma(word) {
    let turnedWord = '';
    let lettere = word.split('');
    for (let i = lettere.length - 1; i >= 0; i--) {
        turnedWord += lettere[i];
    };
    console.log(turnedWord);
    if (turnedWord === word) {
        console.log('La parola è polidroma');
    } else {
        console.log('La parola non è polidroma');
    };
};

palidroma(word);