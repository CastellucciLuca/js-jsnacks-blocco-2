//Crea un array vuoto.
//Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.
const numbers = [];

let userNumbers;

for (let i = 0 ; i < 6 ; i++){
    userNumbers = parseInt(prompt("Insert Number"));
    if (userNumbers % 2 == 1){
        numbers.push(userNumbers);
    }
}
console.log(numbers);