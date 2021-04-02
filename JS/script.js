let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {

        const a = prompt('Один из последних посмотренных фильмов?', ''),
              b = prompt('На сколько оцените его', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('Error');
            i--;
        }
    }   
}

//rememberMyFilms();

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log('Просмотрено слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }

}

//detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

console.log(showMyDB(personalMovieDB.privat));

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних посмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

// let i = 0;
// do {
//     const a = prompt('Один из последних посмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     } else {
//         console.log('Error');
//         i--;
//     }
// } while (i < 2);







let num = 20;

function showFirstMessage(text) {
    //console.log(text);
    let  num = 30;
    //console.log(num);
}

// showFirstMessage('SSSS');
// console.log(num);

function calc(a, b) {
    return (a + b);
}

//console.log(calc(5,6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
//console.log(anotherNum);


// const logger = function () {
//     console.log('Function expression');
// };

//logger();

let b = 100;

const calcl = () => b;

//console.log(calcl());

let str = "Test";

// console.log(str.length);
// console.log(str[2]);

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

let fruit = "Hello world";

//console.log(fruit.slice(-5,-1));

//console.log(fruit.substr(6,5));

//let num_ = 12.2;
//console.log(Math.round(num_));

const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// let billi = 12e9;
// console.log(billi);

// let micro = 1e-6;
// console.log(micro);

// let a = 0b11111111; // бинарная форма записи числа 255
// let bb = 0o377; // восьмеричная форма записи числа 255

// let d = 255;
// console.log(d.toString(16));
// console.log(25109281251259182951273434737..toString(36));

