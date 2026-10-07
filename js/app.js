console.log('Katalog warsztatów uruchomiony');
//console.log(typeof 127);
//console.log(typeof true);
//console.log(typeof "127");
//console.log(typeof NaN);
//console.log(typeof []);
//console.log(typeof {});
//const seats = 12;
//const title = "Kurs JavaScript";

let seats = 11;
let language = (seats == 12) ? 'JavaScript' : 'inne';
let title = `Kurs ${language}`;
let enrolled = 7;
let slogan;
let course;

language = (seats >= 12) ? 'JavaScript' : ((seats >=10) ? `TypeScript` : 'Node.js');

if (enrolled >= 12) {
    course = 'JavaScript';
} else if (enrolled >= 10) {
    course = 'TypeScript';
} else {
    course = 'Node.js';
}

switch(seats) {
    case 0:
        title = 'Nikogo w JSach';
        break;
    
    case 1:
        title = 'Hurra! Pierwszy w JS';
        break;
    
    default:
        title = "Kurs w przygotowaniu"
}
console.log(course);
console.log(title);

function getSlogan() {
    return slogan;
}

function makeHeader() {
    console.log(`Kurs ${course}!`);
    console.log(`${enrolled}/${seats} uczelniaków!`);
    console.log(`${course}`);
}

makeHeader();

//interpolacja
//console.log(`${title}: wolne ${seats - enrolled} z ${seats}`) //szybsze (micro optymalizacja), czytelniejsze
//koncatenacja
//console.log(title + ': wolne ' + (seats - enrolled) + ' z ' + seats)

//console.log('${title}: wolne ${seats - enrolled} z ${seats}') //nie dziala
//console.log("${title}: wolne ${seats - enrolled} z ${seats}") //nie dziala
//console.log(title + ": wolne " + (seats - enrolled) + " z " + seats) //nic nie zmienia
//console.log(title + `: wolne ` + (seats - enrolled) + ` z ` + seats) //nic nie zmienia
//console.log(typeof seats);
//console.log(typeof title);
//console.log(typeof enrolled);
//console.log(typeof slogan);
//console.log(typeof course);