// Создание объекта с текущей датой и временем
var now = new Date(2011, 0, 1);
alert( now );

// getFullYear() - получение года из 4 цифр
// getMonth() - получение месяца от 0 до 11
// getDate() - получение числа от 1 до 31
// По такому же принципу часы, минуты, секунды, милисекунды
// getDay() - получить день недели от 0 до 6

// Неправильные компоненты даты автоматом распределяются по остальным
var d = new Date(2011, 1, 28);
d.setDate(d.getDate() + 2);
alert( d );

// Преобразование к числу, разность дат
var start = new Date; //засекли время
// Чтото случилось
for (var i = 0; i < 100000; i++) {
  var doSomething = i * i * i;
}

var end = new Date; 
alert( "Цикл занял " + (end - start) + " ms");

// Бенчмаркинг
var arr = [];
for (var i = 0; i < 1000; i++) {
  arr[i] = 0;
}

function walkIn(arr) {
  for (var key in arr) {
    arr[key]++;
  }
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]++;
  }
}

function bench(f) {
  var date = new Date();
  for (var i = 0; i < 10000; i++) {
    f(arr);
  }
  return new Date() - date;
}

// bench для каждого теста запустить много раз, чередуя
var timeIn = 0;
    timeLength = 0;

for (var i = 0; i < 100; i++) {
  timeIn += bench(walkIn);
  timeLength += bench(walkLength);
}

alert( 'Время walkIn ' + timeIn + 'ms' );
alert( 'Время walkLength ' + timeLength + 'ms' );

// Пример 1 (Создайте дату)
var date = new Date(2012, 0, 3);
alert( date );

// Пример 2 (Имя дня недели)
alert( getWeekDay(date) )
function getWeekDay(date) {
  var day = date.getDay();
  switch(day) {
    case 0:
      day = "вс";
      break;
    case 1:
      day = "пн";
      break;
    case 2:
      day = "вт";
      break;
    case 3:
      day = "ср";
      break;
    case 4:
      day = "чт";
      break;
    case 5:
      day = "пт";
      break;
    case 6:
      day = "сб";
      break;
  }

  return day;
}

// Пример 3 (День указанное количество дней назад)
var date = new Date(2015, 0, 2);
var n = 2;

alert( getDateAgo(date, n) );

function getDateAgo(date, n) {
  var dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - n);
  return dateCopy.getDate();
}

// Пример 4 (Последний день месяца)
var year = 2012;
var month = 3;

alert( getLastDayOfMonth(year, month) );

function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1, 0); //Нулевой день будет давать последний день предыдущего месяца
  
  return date.getDate();
}

// Пример 5 (Сколько секунд прошло сегодня)
function getSecondToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var dateToday = new Date(year, month, day + 1);
  return Math.floor((dateToday - date) / 1000);
}

alert( getSecondToday() );