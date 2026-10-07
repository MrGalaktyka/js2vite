console.log('Katalog warsztatów uruchomiony');
//console.log(typeof 127);
//console.log(typeof true);
//console.log(typeof "127");
//console.log(typeof NaN);
//console.log(typeof []);
//console.log(typeof {});
const seats = 12;
const title = "Kurs JavaScript";

let enrolled = 12
let slogan;
let course;
//interpolacja
console.log(`${title}: wolne ${seats - enrolled} z ${seats}`) //szybsze (micro optymalizacja), czytelniejsze
//koncatenacja
console.log(title + ': wolne ' + (seats - enrolled) + ' z ' + seats)

console.log('${title}: wolne ${seats - enrolled} z ${seats}') //nie dziala
console.log("${title}: wolne ${seats - enrolled} z ${seats}") //nie dziala
console.log(title + ": wolne " + (seats - enrolled) + " z " + seats) //nic nie zmienia
console.log(title + `: wolne ` + (seats - enrolled) + ` z ` + seats) //nic nie zmienia
//console.log(typeof seats);
//console.log(typeof title);
//console.log(typeof enrolled);
//console.log(typeof slogan);
//console.log(typeof course);