// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const numsList = [
    1,25,42,33,36,41,47,58,432,2543,6578,1512,152,145
];

let sum = 0;

for ( let i = 0 ; i < numsList.length ; i++) {
    if (i % 2 === 1) {
        sum += numsList[i];
    }
}
console.log(sum);