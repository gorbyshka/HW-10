// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let j = '';
for (let i = 20; i <= 30; i = i + 0.5) {
    j += i + ' ';
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let k = '';
const sum = 27;

for (let i = 10; i < 101; i = i + 10) {
    k += i * sum + ',';
};

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const num = 400;
const result = [];

for (let i = 0; i <= 100; i++) {
    if (i * i <= num) {
        result.push([i]);
    }
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const number = 11;
let result2;
let simple = true;

for (let i = 2; i < number; i++) {
    if (!(number % i)) {
        simple = false;
        result2 = 'не простое';
        break;
    } else {
        result2 = 'простое';
    }
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const number2 = 27;
let check = false;
let result3;

for (let i = 1; 3 ** i <= number2; i++) {
    if (3 ** i === number2) {
        check = true;
        result3 = 'возможно';
        break;
    } else {
        result3 = 'невозможно'
    }
}

console.log(`%c 1)  ${j}
                2)  ${k}
                3)  ${result}
                4)  ${result2}
                5)  ${result3} `,
    'font: 1.5em italic; color: red;'
); 