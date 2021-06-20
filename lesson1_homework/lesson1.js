
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// let grearing = 'hello', company = 'owu', site = "com", country = "ua";
// let a = 1, b = 10, c = -999, d = 123, f = 3.14, g = 2.7, j = 16;
//  let bolean1 = true;
//  let bolean2 = false;
// console.log (grearing + " " + company + " " + site + " " + country);
// alert(a+b+c+d+f+g+j);
// document.write(`<h1>${bolean1}</h1> <br> <h2>${bolean2}`);


// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// grearing = "new", company="way", site="to", country='success';
// console.log (grearing + " " + company + " " + site + " " + country);
// const x = 10;
// a=a+x, b=b+x, c=c+x, d=d+x, f=f+x, g=g+x, j=j+x;
// alert(a+b+c+d+f+g+j);
// bolean2=bolean1;
// bolean1="not a boolen at now";
// document.write(`<h1>${bolean1}</h1> <br> <h2>${bolean2}</h2>`);
 

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// let firstName = "Oleksandr ";
// let middleName = "Valerievich";
// let lastName = "Ignatov ";
// console.log(lastName+firstName+middleName);


// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt('Введіть ім.я');
// let middleName = prompt('Введіть по-батькові');
// let age = +prompt('Введіть ваш вік');
// console.log ('Вітаю ' + name + " " + middleName + ". Тобі " + age + " років");

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;
//    console.log(typeof a, typeof b, typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!
// console.log  (5 < 6) //-> true
// console.log  (5 == 6) //-> false
// console.log  (5 > 6) //-> false
// console.log  (5 === 6) //-> false
// console.log  (10 == 10) //-> true
// console.log  (10 >= 10) //-> true
// console.log  (10 > 10) //-> false
// console.log  (10 != 10) //-> false
// console.log  (10 !== 10) //-> false
// console.log  (123 === '123') //-> false
// console.log  (123 == '123') //-> true

// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
//console.log(132 > 100 && 45 < 12 ); //false
//console.log(34 > 33 && 23 < 90 ); //true
// console.log(99 > 100 && 45 > 12 ); //false
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//true
// console.log(!!'-1'); //true
// console.log(!!-1); //true
// console.log(!!'0'); //true
// console.log(!!'null'); //true
// console.log(!!'undefined'); //true
// console.log(!!(3/'owu')); //false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); //true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false


// =====================
// ======ДОП============
// =====================
// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = prompt ('Enter first number');
// let b = prompt ('Enter second number');
// let c = prompt ('Enter third number');
// if (a < b && a < c) {
//     if( b < c ) console.log(a, b, c);
//     else console.log(a, c, b)
// }
// else if(b < a && b < c ) {
//     if( a < c ) console.log(b, a, c);
//     else console.log(b, c, a);
// }
// else if(c < a && c < b ) {
//     if( b < a ) console.log(c, b, a);
//     else console.log(c, a, b);
// }

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let string = prompt ("ввести одно из значений: зеленый, желтый, красный");
// switch(string){
//     case 'зеленый': console.log("иди");
//     break;
//     case 'желтый': console.log("подожди");
//     break;
//     case 'красный': console.log("стой");
//     break;
//     default: console.log("делай что хочешь");
// }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let isRoadClear = confirm("Есть ли на дороге машины? Если есть - нажмите 'ок'");
// let string = prompt ("ввести одно из значений: зеленый, желтый, красный");
// switch(string){
//     case 'зеленый': console.log((isRoadClear) ? 'подожди пока нарушители проедут' : 'иди'); 
//     break;
//     case 'желтый': console.log((isRoadClear) ? 'все рано жди' : 'жди'); 
//     break;
//     case 'красный': console.log((isRoadClear) ? 'стой и жди' : 'стой все рано'); 
//     break;
//     default: console.log("делай что хочешь");
// }