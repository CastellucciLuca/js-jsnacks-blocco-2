//Crea un array vuoto.
//Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.
const numbers = [];

for (let i = 0 ; i < 6 ; i++){
    let userNumbers = parseInt(prompt("Insert Numbers"));
    if (userNumbers % 2 == 1){
        numbers.push(userNumbers);
    }
}
console.log(numbers);