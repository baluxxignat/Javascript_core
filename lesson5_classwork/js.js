// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let main_header = document.getElementById('main_header');
// main_header.style.color = 'red'; // поменял цвет......
// main_header.innerText = 'May-2021'; // поменял название 

// b) робить шириниу елементу ul 400px
// let ul_with = document.getElementsByTagName ('ul');
// for (const i of ul_with) {
//     i.style.width = '400px';        
//     i.style.background = 'red';         //чтобы увидеть
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName ('linkList');
// for (const i of linkList) {
//     i.style.width = '50%';
//     i.style.background = 'red';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.querySelector('body ul li.listElement2');
// let text3 = listElement2.innerText;
// console.log(text3);

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let ul_with = document.getElementsByTagName ('li');
// for (const i of ul_with) {
//     i.style.background = 'gray';
//     i.style.margin = '5px';         
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName ('a');
// for (const i of a) {
//     i.classList.add ('anchor');       
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//  змінює йому розмір тексту на 40 пікселів
// let a = document.getElementsByTagName ('a');
// for (const i of a) {
//     if (i.innerText === 'link3' ) {
//         i.style.fontSize = '40px';
//     }       
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let a = document.getElementsByTagName ('a');
// for (const i of a) {
//     i.classList.add (`element_` + `${i.innerText}`);       
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt('Введите цвет элемента');
// let sub_header = document.getElementsByClassName ('sub-header');
// for (const i of sub_header) {
//     i.style.background = color;
// }


//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment . Колір отримати з prompt()
// let color = prompt('Введите цвет элемента');
// let sub_header = document.getElementsByClassName ('sub-header');
// for (const i of sub_header) {
//     if (i.innerText === 'content 2 segment' ) i.style.background = color;
// }

//     k) отримує елемент з класом content_1 та заміняє  в 
// ньому тест на довільний. Текст отримати з prompt()
// let text = prompt('Введите текст');
// let to_the_moon = document.querySelector('body div.content_1');
// to_the_moon.innerText = text;


//     l) отримати елементи p та змінити їм padding на 20px
// let p = document.getElementsByTagName ('p');
// for (const i of p) {
//    i.style.padding = '20px'; 
//    // i.style.color = 'red';    
// }

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let text2 = document.getElementsByClassName ('text2');
// for (const i of text2) {
//     i.innerText = 'May-2021';
// }


// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
// let form = document.forms.myForm2;
// let nameInput = form.last_name;
// form.addEventListener ('submit', (event) => {
//     // event.preventDefault();
//     //let name = nameInput.value;
//     localStorage.setItem('user', nameInput.value );
// });


// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент 
// <a href='list.html'> На сторінку товарів</a>, 
//та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
let form1 = document.forms.myForm1;
let nameOfGoods = form1.firstFild;
let quantityOfGoods = form1.secondFild;
let priceOfGoods = form1.thirdFild;
let imgOfGoods = form1.foutFild;
let array = [];
form1.addEventListener ('submit', (event) => {
    event.preventDefault();
    
    let one_Order = {
        name_Of_Goods: nameOfGoods.value,
        quantity_Of_Goods: quantityOfGoods.value,
        price_Of_Goods: priceOfGoods.value,
        img_Of_Goods: imgOfGoods.value
    };
    array.push(one_Order);
    
    localStorage.setItem(one_Order.name_Of_Goods, JSON.stringify(array));
});








// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар