// - створити функцію яка обчислює та повертає площу прямокутника 
//S = a · b де S - площа прямокутника, a, b - довжини сторін прямокутника.
// function s (a, b) {
//     return a * b;
// }
// console.log(s(4, 5));

// - створити функцію яка обчислює та повертає площу кола
//S = π r2
// function s_circl (radius) {
//     return 2 * Math.PI * radius;
// }
// console.log(s_circl(5));


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:

//       0 i+1
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let foo = [9,8,0,4];
// function shuffle (array, i) {
//     let temp = array[i+1];
//     array[i+1] = array[i];
//     array[i] = temp;
//     return array;
// }
// let a = shuffle (foo, 1);
// console.log(a);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function zero_to (arr) {
//     arr1_zero = [];
//     arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0 || arr[i] < 0 ) arr2.push(arr[i]);
//         else arr1_zero.push(arr[i]);
//     }
//     return arr2.concat(arr1_zero);
// }
// let a = zero_to([1,0,6,0,3]);
// console.log(a);



// - Дано список імен.
let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function normalizeAss (a) {
    
    return a.join();
}

console.log(normalizeAss(n1));