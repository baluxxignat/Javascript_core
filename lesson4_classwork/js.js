// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor (name, age, foot_Size) {
//         this.name = name; 
//         this.age = age;
//         this.foot_Size = foot_Size;
//     }
// }

// let users = [
//     new Cinderella ('Yulia', 18, 34),
//     new Cinderella ('Asia', 19, 36),
//     new Cinderella ('Olia', 23, 32),
//     new Cinderella ('Nadia', 30, 34),
//     new Cinderella ('Tania', 19, 35),
//     new Cinderella ('Ksenia', 18, 36),
//     new Cinderella ('Vika', 20, 32),
//     new Cinderella ('Nastia', 21, 30),
//     new Cinderella ('Sveta', 22, 32),
//     new Cinderella ('Helen', 37, 36),
    
// ];

// class Prince {
//     constructor (imia, age, foot_found) {
//         this.imia = imia; 
//         this.age = age;
//         this.foot_found = foot_found;
//     }
// }
// let prince1 = new Prince ('Sania', 35, 36);

// // let best_one = users.filter(user => user.foot_Size === prince1.foot_found && user.age >30);
// // console.log (best_one);

// for (const i of users) {
//     if (i.foot_Size === prince1.foot_found && i.age >30) {
//         console.log(i);
//     }
// }

        
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить    

function Cinderella (name, age, foot_Size) {
       
    this.name = name; 
    this.age = age;
    this.foot_Size = foot_Size;
        
}

let users = [
    new Cinderella ('Yulia', 18, 34),
    new Cinderella ('Asia', 19, 36),
    new Cinderella ('Olia', 23, 32),
    new Cinderella ('Nadia', 30, 34),
    new Cinderella ('Tania', 19, 35),
    new Cinderella ('Ksenia', 18, 36),
    new Cinderella ('Vika', 20, 32),
    new Cinderella ('Nastia', 21, 30),
    new Cinderella ('Sveta', 22, 32),
    new Cinderella ('Helen', 37, 36),
        
];

function Prince (name, age, foot_found) {
       
    this.name = name; 
    this.age = age;
    this.foot_found = foot_found;
    this.cinderella_to_find = function name(params) {
        
    }{
        array.filter(user => user.foot_Size === this.foot_found );
    }   
}
let prince1 = new Prince ('Sania', 35, 36);

console.log(prince1.cinderella_to_find(users));


// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }