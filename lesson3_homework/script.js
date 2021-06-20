// 1) створити функцію яка приймає масив та виводить його
// let array = [1, 2, 3, 4, 5];
// function showarray (arr){
//     console.log(arr);
// }
// showarray(array);

// створити функцію яка заповнює масив рандомними числами та виводить його.
//  Для виведення використати попередню функцію.
// let array = [];
// function showarray (arr){
//     console.log(arr);
// }
// function fullfill_arr (length) {
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.round(Math.random()*100);
//     }
// }
// fullfill_arr (10);
// showarray(array);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min_of_number (number1, number2, number3) {
//     let temp = number1;
//     if(number2<temp) temp = number2;
//     else if (number3<temp) temp = number3;
//     console.log(temp);
// }
// min_of_number(5, 1, 10);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max_of_number (number1, number2, number3) {
//     let temp = number1;
//     if(number2>temp) temp = number2;
//     else if (number3>temp) temp = number3;
//     console.log(temp);
// }
// max_of_number(5, 1, 10); 

// 5) створити функцію яка повертає найбільше число з масиву
// let array = [-1, 33, 55, 115, 77, -198, 66, 99, 54, 222, 23];
// function max_value (arr)  {
//     let temp = arr[0];
//     for (const i of arr) {
//         if(i>temp) temp = i;
//     }
//     return temp;
// }
// console.log(max_value(array));


// 6) створити функцію яка повертає найменьше число з масиву
// let array = [-1, 33, 55, 115, 77, -198, 66, 99, 54, 222, 23];
// function min_value (arr)  {
//     let temp = arr[0];
//     for (const i of arr) {
//         if(i<temp) temp = i;
//     }
//     return temp;
// }
// console.log(min_value(array));


// 7) створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// let array = [-1, 33, 55, 115, 77, -198, 66, 99, 54, 222, 23];
// function sum_value (arr)  {
//     let temp = 0;
//     for (const i of arr) {
//         temp += i;
//     }
//     return temp;
// }
// console.log(sum_value(array));


// 8) створити функцію яка приймає масив чисел
//  та повертає середнє арифметичне його значень.
// let array = [-1, 33, 55, 115, 77, -198, 66, 99, 54, 222, 23];
// function arifmetic_value (arr)  {
//     let temp = 0;
//     let count = 0;
//     for (const i of arr) {
//         temp += i;
//         count++;
//     }
//     return temp/count;
// }
// console.log(arifmetic_value(array));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// сделал сам:
// let array = [
//     {id: 'Vasia', age: 18},
//     {sex: 'vomen', age: 25},
// ];

// function return_id (obj) {
//     let array_keys = [];
//     for (const i of obj) {
//         array_keys.push(Object.keys(i));
//     }
//     console.log(array_keys.flat());
// }
// return_id (array);

                                // Подсказка от ментора
                                //// function countFields(arrayObj) {
                                ////     let count = [];
                                ////     for (const item of arrayObj) {
                                ////        if (typeof item === 'object' && !Array.isArray(item)){ //не масив
                                ////            for (const key in item) {
                                ////              count.push(key);
                                ////            }
                                ////        }

                                ////     }
                                ////        return count;
                                //// }
                                //// let number = countFields(array);
                                //// console.log(number);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let array = [
//     {id: 'Vasia', age: 18},
//     {sex: 'vomen', age: 25},
    
// ];
// function return_value (obj) {
//     let array_keys = [];
//     for (const i of obj) {
//         array_keys.push(Object.values(i));
//     }
//     console.log(array_keys.flat());
// }
// return_value (array);

// 11) створити функцію  яка скаладає значення елементів з 
// однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]                     //arr.map - второй способ
// let array1 = [1,2,3,4];
// let array2 = [2,3,4,5];

// let abc = (arr1, arr2) => {
//     let val3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         val3.push(arr1[i]+arr2[i]);  
//     }
//     return (val3);
// }
// console.log(abc(array1, array2));
