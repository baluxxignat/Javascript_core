// 1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// 2 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
// let users = [{
//       name: 'vasya',
//       age: 31,
//       status: false,
//       address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
//     }, {
//       name: 'petya',
//       age: 30,
//       status: true,
//       address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
//     }, {
//       name: 'kolya',
//       age: 29,
//       status: true,
//       address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
//     }, {
//       name: 'olya',
//       age: 28,
//       status: false,
//       address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
//     }, {
//       name: 'max',
//       age: 30,
//       status: true,
//       address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
//     }, {
//       name: 'anya',
//       age: 31,
//       status: false,
//       address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
//     }, {
//       name: 'oleg',
//       age: 28,
//       status: false,
//       address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
//     }, {
//       name: 'andrey',
//       age: 29,
//       status: true,
//       address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
//     }, {
//       name: 'masha',
//       age: 30,
//       status: true,
//       address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
//     }, {
//       name: 'olya',
//       age: 31,
//       status: false,
//       address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
//     }, {
//       name: 'max',
//       age: 31,
//       status: true,
//       address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];

// for (const i of users) {
//     
//     let user_div = document.createElement ('div');
    
    
//     let title = document.createElement ('h3');
//     title.innerText = `name: ${i.name}, age: ${i.age}`;
//     user_div.append(title);

//     let info1 = document.createElement ('p');
//     info1.innerText = `status:${i.status}`;
//     user_div.append(info1);

//     let user_div_forAdress = document.createElement ('div');
//     user_div.append(user_div_forAdress);

//     let info2 = document.createElement ('h4');
//     info2.innerText = `address:`;
//     user_div_forAdress.append(info2);

//     let adress_country = document.createElement ('p');
//     adress_country.innerText = `country: ${i.address.country}`;
//     user_div_forAdress.append(adress_country);

//     let adress_city = document.createElement ('p');
//     adress_city.innerText = `city: ${i.address.city}`;
//     user_div_forAdress.append(adress_city);

//     let adress_street = document.createElement ('p');
//     adress_street.innerText = `street: ${i.address.street}`;
//     user_div_forAdress.append(adress_street);

//     let adress_houseNumber = document.createElement ('p');
//     adress_houseNumber.innerText = `houseNumber: ${i.address.houseNumber}`;
//     user_div_forAdress.append(adress_houseNumber);

//     document.body.append(user_div);
// }






// 3 Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				}
];


let wrap = document.createElement('div');
wrap.setAttribute('id', 'wrap');
let main_title = document.createElement ('h1');
main_title.innerText = `Правила бойцовского клуба`;
wrap.append(main_title);

for (const rul of rules) {
    let wrap_of_block = document.createElement('div');
    wrap_of_block.classList.add('rules', `rule${rules[rul]}` );   ///// я не знаю как обратиться к индексу+1
    
    wrap.append(wrap_of_block);

    let h2 = document.createElement ('h2');
    h2.innerText = `${rul.title}`;
    wrap_of_block.append(h2);

    let text = document.createElement ('p');
    text.innerText = `${rul.body}`;
    wrap_of_block.append(text);

    document.body.append(wrap);
            
}