// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// let str = "Привіт", num = 123, flag = true, txt = "true";
// console.log(typeof str, typeof num, typeof flag, typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори. 
//     Example: 88 = (16 / 2) * 11

// let a1 = 7 * 4 + 6;
// let a2 = 27 % 7 + 6;
// let a3 = 50 * 2 - 68 / 2;
// let a4 = (( 1 + 9) * (99 % 90))
// let a5 = (999-900)/11 + 78

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
//let a6 = 2, a7 = 2, a8 = "53", a9 = 2, a10 = '75кг';

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height)
// та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.
// let height = 23, width = 10;   // S = a · b
// let c = height * width;
// console.log("Площа прямокутника дорівнює " + c + " " + "см.");

// 5. Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) 
//и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heightC = 23, dC = 10;   // V=Sh где:S - площадь основания, h - высота цилиндра.
// let v = heightC * dC;
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать
// функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3, m = 4;
// let k = Math.hypot(n, m); 
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши
//  переменную str и выводить спомощью document.write, alert и console.log
// let str = "Hello world";
// document.write(str);
// alert(str);
// console.log (str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные:
//  Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//alert("Ignatov Oleksandr Valerievich" + "\n" + "35 лет" + "\n" + "хобби - приборый поиск" );

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = "‘Кто ‘", str2 = "‘ты ‘", str3 = "‘такой?’";
// let concatenation = str1 + str2 + str3;
// console.log(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//   let str = "20";
//    let a = 5;
// document.write(str + a + "<br/>"); //205 - конкатенация строк
// document.write(str - a + "<br/>"); // 15 - также приведено к числу
// document.write(str * "2" + "<br/>"); //40 - строка будет приведена к намберу в результате умножения.

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    // parseInt("3.14") //парсится в число
    // parseInt("-7.875")  //парсится в число
    // parseInt("435") //парсится в число
    // parseInt("Вася"); // NAN - нот а намбер

    // 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может
    //  ввести данные, которые будут использоваться далее, повторите код ниже
    // let str = prompt("Enter something", "ho-ho")
    // console.log(str);
    
    // 13. С помощью окна ввода, вызываемого методом prompt,
    //  сделать сложение двух чисел, а вывод результата при помощи метода alert
    // let a = parseInt(prompt('Введите первое число'));
    // let b = parseInt(prompt('Введите второе число'));
    // alert(a + b );

    // 14. С помощью окна ввода, вызываемого методом prompt, пользователь
    //  последовательно выводит имя, фамилию и возраст, а вам не обходимо
    //   вывести строку такого вида       Доброго вечера Иван Иванов, мои
     //  поздравления что вам 32 , а вывод результата при помощи метода alert

    // let names = prompt("Введите Ваше имя");
    // let first_name = prompt("Введите Вашу фамилию");
    // let age = prompt ("Введите ваш возраст");
    // alert ("Доброго вечера " + names + " " + first_name + " мои поздравления что вам " + age + " ");