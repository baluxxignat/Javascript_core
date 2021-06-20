// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let array = [55, 33, 22, 17, 11];
// let array2 = ['55bb', "ffffff", "strong", "weakly", "the_boss"];
// let array3 = [55, true, "ffffff", 17, "the_boss" ];
// console.log(array);
// console.log(array2);
// console.log(array3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями
//  звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array [0] = 77;
// array [1] = "connect";
// array [2] = true;
// console.log(array[1]);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let a = "з довільним текстом";
// for (let i = 0, count = 0; i < 10 ; i++, count++ ) {
//     document.write (`<div> ${count} ${a} </div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0, a = "з довільним текстом";
// while(i<20) {
//     document.write (`<h1> ${i} ${a} </h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i of array) console.log(i);

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "full"];
// for(let i of array) console.log(i);

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = ["1", null, true, "4", 5, 6, 7, "8", NaN, "full"];
// for(let i =0; i<array.length; i++) console.log(array[i]);

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. 
// За допомогою if та typeof вивести тільки булеві елементи
// let array = ["1", true, 3, "4", 5, false, 7, "8", 9, false];
// for (let i =0; i<array.length; i++){
//     if(typeof array[i] === 'boolean') console.log(array[i]);
// } 

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. 
// За допомогою if та typeof вивести тільки числові елементи
// let array = ["1", true, 3, "4", 5, false, 7, "8", 9, false];
// for (let i =0; i<array.length; i++){
// if(typeof array[i] === 'number') console.log(array[i]);}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//  За допомогою if та typeof вивести тільки рядкові елементи
// let array = ["1dd", true, 3, "4dd", 5, false, 7, "8dd", 9, false];
// for (let i =0; i<array.length; i++){
// if(typeof array[i] === 'string') console.log(array[i]);}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//  Вивести в консоль всі його елементи в циклі.
// let array = []; array [0] = 77; array [1] = "connect"; array [2] = true; array [3] = false; array [4] = "8dd";
// array [5] = true; array [6] = "4dd"; array [7] = true; array [8] = "1dd"; array [9] = false;
// for(let i of array) console.log(i);

// - Створити цикл for на 10  ітерацій з кроком 1. 
// Вивести поточний номер кроку через console.log та document.write
// for (let i =0; i<10; i++){ console.log(i); document.write (i);}

// - Створити цикл for на 100 ітерацій з кроком 1. 
// Вивести поточний номер кроку через console.log та document.write
// for (let i =0; i<100; i++){ console.log(i); document.write (i);}

// - Створити цикл for на 100 ітерацій з кроком 2. 
// Вивести поточний номер кроку через console.log та document.write
// for (let i =0; i<100; i+=2){ console.log(i); document.write (i);}

// - Створити цикл for на 100 ітерацій. 
// Вивести тільки парні кроки. через console.log + document.write
// for (let i =0; i<100; i++){
// if(i%2 ==0) {
//     console.log(i); document.write (i);
// } }

// - Створити цикл for на 100 ітерацій. 
// Вивести тільки непарні кроки. через console.log + document.write
// for (let i =0; i<100; i++){
//     if(i%2 !=0) {
//         console.log(i); document.write (i + "*");
//     } 
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини
//  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//     let clock = () => {
//     let date = new Date();
//     let hrs = date.getHours();
//     let mins = date.getMinutes();
//     let secs = date.getSeconds();
//     hrs = hrs < 10 ? "0" + hrs : hrs;
//     mins = mins < 10 ? "0" + mins : mins;
//     secs = secs < 10 ? "0" + secs : secs;
//     let time = `${hrs}:${mins}:${secs}`; 
//     document.getElementById("clock").innerText = time;
//     setTimeout(clock, 1000);
// };
// clock();

// я решил немного покреативить, и нагуглил крутяцкие часы
// правда реализован он через функции, т.е. за границами задания.
// поскольку искусство гуглить в IT очень восстребовано, 
// оставляю оба варианта, в том числе этого аутсайдера из трьох циклов снизу....
// for (let j = 1; j < 3; j++) {
//     for (let k =1; k<21; k++) {
//         for (let i =1; i<61; i++){
//             console.log(j, k, i);
//         }
//     }
// }   

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// for (const iterator1 of usersWithId) {
//     for (const iterator2 of citiesWithId) {
//         if(iterator1.id === iterator2.user_id){
//             iterator1.address = iterator2;
//             break;
//         }
//     }
// }
// console.log(usersWithId);



