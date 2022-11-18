//- Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//let x = 1;
//if(x !== 0) {
// console.log('Yes');
//}else {
//    console.log('No');
//}
//-------
//Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1,0, -3 ;

//let x = 1;
//if(x !== 0) {
// console.log('Yes');
//}else {
//    console.log('No');
//}
//---------------------------------------------------------------
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

//let time = 20;

//if (time < 15) {
//  document.write('one');
//}else if (time >= 16 && time <30) {
//    document.write('two');
//}else if (time >= 31 && time <45) {
//    document.write('three');
//}else if (time >= 46 && time <60){
//    document.write('four');
//}else {
//    console.log('error');
//}
//-------------------------------------------------------
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//let x = 20;
//x > 0 && x <= 60 ? console.log('first') : x > 10 && x <=20 ?console.log('second') :
//    x > 20 && x <= 31 ? console.log('third') : console.log('error');
//-------------------
//let day = +prompt();
//if ( day < 10) {
//   document.write('one');
//}else if (day >= 10 && day <20){
//    document.write('two');
//}else if (day >= 20 && day <30) {
//    document.write('three');
//}else {
//    console.log('error');
//}
//------------------
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//let num = +prompt();
//switch (num) {
//    case 1:
//        console.log('sunday');
//        break;
//    case 2:
//        console.log('monday');
//        break;
//   case 3:
//        console.log('tuesday');
//        break;
//    case 4:
//        console.log('wednesday');
//        break;
//    case 5:
//        console.log('thursday');
//        break;
//    case 6:
//        console.log('friday');
//        break;
//    case 7:
//        console.log('saturday');
//        break;
//    default:
//        console.log('error');
//}
//-----------------------

//    - Користувач вводить або має два числа.
//        Потрібно знайти та вивести максимальне число з тих двох .
//        Також потрібно врахувати коли введені рівні числа.

//let a = 1;
//let b =10;
//if (a>b) {
//    console.log(a)
//} else  if (b>a) {
//    console.log(b);
//} else if (a===b) {
//    console.log('equal');
//} else {
//    console.log('error');
//}
//-------------------


//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

//let x = +prompt() || 'default';
//console.log(x);

//or

//let x = 'str';
//if (!!x === false) {
//    console.log('default');
//}else {
//  console.log  ('Hello');
//}

//or

//let x = 'str';
//if (!x !== f''else) {
//    console.log('default');
//}else {
//  console.log  ('Hello');
//}

//or

//let x = 0;
//if (0) {
//    console.log('hello');
//} else {
//    console.log('default');
//}

