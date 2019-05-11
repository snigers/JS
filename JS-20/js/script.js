// Вызов функции через 1 секунду
/* function func() {
  alert( "Привет" );
}

setTimeout(func, 1000); */

// С передачей аргументов
/* function func(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(func, 1000, "Привет", "Вася"); */

// Отмена исполнения clearTimeout
/* var timerId = setTimeout(function() {alert("Привет")}, 1000);
alert( timerId );

clearTimeout(timerId);
alert( timerId );  *///все еще число, оно не обнулилось после отмены

// setInterval - вызывает функцию в периоде
// начать повторы с интервалом 2 секунды
/* var timerId = setInterval(function () {
  alert( "Тик" );
}, 2000);

// Через 5 секунд остановить повторы
setTimeout(function () {
  clearInterval(timerId);
  alert( "Стоп" );
}, 5000); */

// Рекурсивный setTimeout
var timerId = setTimeout(function tick() {
  alert("tik");
  timerId = setTimeout(tick, 2000);
}, 2000);