// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User
// function  Users (id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let array = [
//     new Users (99, 'Yuriy', 'Shayka', 'yuriy.shayka@gmail.com', '+380993622888'),
//     new Users (27, 'Andriy', 'Labay', 'yuriy.shayka@gmail.com', '+380993645688'),
//     new Users (3, 'Andriy', 'Duhnich', 'yuriy.shayka@gmail.com', '+380993342888'),
//     new Users (43, 'Vasil', 'Palka', 'yuriy.shayka@gmail.com', '+380993672888'),
//     new Users (5, 'Yuriy', 'Busko', 'yuriy.shayka@gmail.com', '+380990388399'),
//     new Users (66, 'Yuriy', 'Shayka', 'yuriy.shayka@gmail.com', '+380993622888'),
//     new Users (1, 'Oleg', 'Ivachishin', 'yuriy.shayka@gmail.com', '+380993622888'),
//     new Users (8, 'Maks', 'Rolia', 'yuriy.shayka@gmail.com', '+380993622888'),
//     new Users (999, 'Aleks', 'Ignatov', 'yuriy.shayka@gmail.com', '+380993452888'),
//     new Users (11, 'Fox', 'Malder', 'yuriy.shayka@gmail.com', '+380998822888'),
        
// ];
// console.log(array);

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order = []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let array2 = [
//     new Client (111, 'Yuriy', 'Shayka', 'yuriy.shayka@gmail.com', '+380993622888', ['milk']),
//     new Client (29, 'Andriy', 'Labay', 'yuriy.shayka@gmail.com', '+380993645688', ['sugar', 'tomato', 'eggs']),
//     new Client (33, 'Andriy', 'Duhnich', 'yuriy.shayka@gmail.com', '+380993342888', ['hamburger', 'candy'] ),
//     new Client (41, 'Vasil', 'Palka', 'yuriy.shayka@gmail.com', '+380993672888', ['marmalade', 'butter']),
//     new Client (5, 'Yuriy', 'Busko', 'yuriy.shayka@gmail.com', '+380990388399', ['honey', 'meat','ham']),
//     new Client (17, 'Yuriy', 'Shayka', 'yuriy.shayka@gmail.com', '+380993622888', [ 'olives', 'meat',   'cream']),
//     new Client (75, 'Oleg', 'Ivachishin', 'yuriy.shayka@gmail.com', '+380993622888', [ 'salt', 'cheese']),
//     new Client (8, 'Maks', 'Rolia', 'yuriy.shayka@gmail.com', '+380993622888', ['cake', 'bread', 'chocolade', 'olives',  'meat']),
//     new Client (19, 'Aleks', 'Ignatov', 'yuriy.shayka@gmail.com', '+380993452888', ['chocolade', 'eggs']),
//     new Client (10, 'Fox', 'Malder', 'yuriy.shayka@gmail.com', '+380998822888', ['crab', 'salmon', 'eggs', 'salt',]),
// ];
// console.log(array2);

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function  Cars (model, producer, year_build , max_speed, capacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year_build = year_build;
//     this.max_speed = max_speed;
//     this.capacity = capacity;
// }
// let car1 = new Cars ('BMW', 'BMW Group', 2020, 200, '2.2' );

// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// Cars.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
// } 
// car1.drive();

// -- info () - яка виводить всю інформацію про автомобіль
// Cars.prototype.info = function () {
// console.log(`Модель автомобіля: ${this.model}`, '\n',
//  `Виробник: ${this.producer}`, '\n',
//   `Рік випуску: ${this.year_build}`,  '\n',
//    `Максимальна швидкість ${this.max_speed}`, '\n',
//    `Обєм двигуна: ${this.capacity}`);
// }
// car1.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// Cars.prototype.increaseMaxSpeed = function (newSpeed) {
//  console.log(this.max_speed +=newSpeed); 
// }
// car1.increaseMaxSpeed(100);

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// Cars.prototype.changeYear = function (newValue) {
//     console.log(`Рік випуску змінено на: `, this.year_build = newValue);
// }
// car1.changeYear(2018);

// -- addDriver (driver) - приймає об'єкт який "водій" з
// довільним набором полів, і доавляет його в поточний об'єкт car
// Cars.prototype.addDriver = function  () {
//     this.driver = {
//         imya: 'Gorge',
//         stag: 9,
//         sex: 'gomosek'
//     }
// }
// car1.addDriver();
// console.log(car1);


// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Cars {
//     constructor(model, producer, year_build, max_speed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year_build = year_build;
//         this.max_speed = max_speed;
//         this.capacity = capacity;
//     }

//     drive () 
//     { console.log(`їдемо зі швидкістю ${this.max_speed} на годину`); }

//     info () {
//         console.log(`Модель автомобіля: ${this.model}`, '\n',
//          `Виробник: ${this.producer}`, '\n',
//           `Рік випуску: ${this.year_build}`,  '\n',
//            `Максимальна швидкість ${this.max_speed}`, '\n',
//            `Обєм двигуна: ${this.capacity}`
//         );
//     }

//     increaseMaxSpeed (newSpeed) { console.log(this.max_speed +=newSpeed); }

//     changeYear = (newValue) => {console.log(`Рік випуску змінено на: `, this.year_build = newValue);}

//     addDriver = () => {
//         this.driver = {
//             imya: 'Gorge',
//             stag: 9,
//             sex: 'gomosek'
//         }
//     }
// }
// let car1 = new Cars ('BMW', 'BMW Group', 2020, 200, '2.2' );
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(200);
// car1.changeYear(1999);
// car1.addDriver();
// console.log(car1);



// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// let filter = array.filter (function (row) {
//     return row.id % 2 === 0;
// })
// console.log(filter);

// // - Відсортувати його по id. по зростанню
// let sort1 = array.sort (function (user1, user2) {
//     return user1.id - user2.id;
// })
// console.log(sort1);

// // - Відсортувати його по id. по спаданню
// let sort2 = array.sort (function (user1, user2) {
//     return user2.id - user1.id;
// })
// console.log(sort2);

// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню
// let sort3 = array2.sort (function (param1, param2,) {
//     return param2.order.length - param1.order.length;
// })
// console.log(sort3);






























// let numbers = [1, 6, 9, 0, 17, -22, 99];
// numbers.sort ((a, b) => {
//     console.log(a);
//     console.log(b);
//     console.log("**************************");
//     return a-b;
// });
// console.log(numbers);