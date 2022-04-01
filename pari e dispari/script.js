// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione), sommiamo i due numeri, stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione e dichiariamo chi ha vinto.

let coin = prompt('Scegli pari o dispari');
console.log(coin);

// FUNZIONE NUMERI RANDOM
function randomNum() {
    return Math.floor(Math.random() * 5) + 1;
};

// FUNZIONE PARI E DISPARI
function paridispari(num) {
    if (num % 2 === 0) {
        return num = 'pari';
    } else {
        return num = 'dispari';
    };
}

// CONTROLLO
if (coin !== 'pari' && coin !== 'dispari') {
    console.log('Non hai scelto tra pari o dispari');
} else {
    let num = parseInt(prompt('Scegli un numero tra 1 e 5 compresi'));
    if (num < 1 || num > 5) {
        console.log('Il numero non si trova tra 1 e 5 compresi')
    } else {
        console.log('num: ', num);
        let random = randomNum();
        console.log('num random: ', random);

        let somma = num + random;
        console.log('somma: ', somma);

        let tipoSomma = paridispari(somma);
        console.log(tipoSomma)

        if (coin === tipoSomma) {
            console.log('hai vinto')
        } else {
            console.log('hai perso')
        }
    };
};