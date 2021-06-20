// 1) Напишіть код,  який за допомоги document.getElementById 
// або document.getElementsByClassName або document.getElementsByTagName :

//     a) отримує текст з параграфа з id "content"
// let id_content = document.getElementById ('content');
// let text = id_content.innerText;
// console.log(text);

    // b) отримує текст з блоку з id "rules"
// let id_rules = document.getElementById ('rules');
// let text2 = id_rules.innerText;
//  console.log(text2);

//     c) замініть текст параграфа з id 'content' на будь-який інший
// let id_content = document.getElementById ('content');
// id_content.innerText = '«Аэли́та» — фантастический роман Алексея Николаевича Толстого о путешествии землян на Марс. Текст написан в основном в эмиграции, первое издание вышло в Петрограде в 1923 году и неоднократно перепечатывалось. В 1935—1938 годах автор глубоко переработал текст для Детгиза и Гослитиздата, сделав его более эстетически выверенным и сняв много мистических эпизодов и элементов, в жанровом отношении он превратился в повесть. Таким образом, «Аэлита» входит в ряд произведений А. Толстого, существующих в двух сильно отличающихся вариантах при неизменности фабулы.'
// console.log(id_content);

//     d) замініть текст параграфа з id 'rules' на будь-який інший
// let id_rules = document.getElementById ('rules');
// id_rules.innerText = 'Основой сюжета является полёт инженера Мстислава Сергеевича Лося и солдата Алексея Ивановича Гусева на Марс, где они обнаруживают высокоразвитую цивилизацию. Правители марсиан являются потомками древних атлантов, перелетевших двадцать тысяч лет назад на красную планету. Инженер Лось влюбляется в дочь «властелина над всеми странами Тумы» (Марса) Аэлиту; Гусев, подружившись с племянницей управляющего Ихой, намеревается устроить революцию на планете с целью последующего присоединения Марса к РСФСР. Однако эти мечты оказались несбыточными: Тускуб, отец Аэлиты, повелел убить пришельцев, революция захлебнулась в крови. Путешественникам удаётся спастись от преследований армии Тускуба и вернуться на Землю. В финале Лось принимает на радиостанции таинственные сигналы из космоса, в которых узнаёт голос Аэлиты.'
// console.log(id_rules);

//     e) змініть кожному елементу колір фону на червоний
// let body_color = document.body.children;
// for (const i of body_color) {
//     i.style.background = 'red';
// }

//     f) змініть кожному елементу колір тексту на синій
// let body_color2 = document.body.children;
// for (const i of body_color2) {
//     i.style.background = 'blue';
// }

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// let all_clases = document.getElementById ('rules');
// console.log(all_clases.classList);

//     h) отримати всі елементи з класом fc_rules
// let all_clases = document.getElementsByClassName ('fc_rules');
// for (const i of all_clases) {
//     console.log(i);
// }


//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
// let all_clases = document.getElementsByClassName ('fc_rules');
// for (const i of all_clases) {
//     i.style.background = 'red';
//     i.style.margin = '5px';
// }