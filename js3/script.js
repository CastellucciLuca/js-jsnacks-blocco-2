//Calcola la somma dei primi 10 numeri di un array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let index = 0; index < 10; index++) {
    sum += numbers[index];   
}

console.log(sum);
