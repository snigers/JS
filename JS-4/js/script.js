// alert("Привет\nмир!");
var str = 'I\'m a JavaScript programmer';

alert( str.length ); //Получение длинны строки

// CharAt при отсутствие символа выдает пустую строку
// Скобки выдают undefined
alert( str.charAt(1) ); // Получение конкретного символа из строки
alert( str[1] ); //Также получение отдельного символа

// Смена регистра
alert( "Интерфейс".toUpperCase() ); //ИНТЕРФЕЙС
alert( "Интерфейс" [0].toLowerCase() ); //'и'

// Поиск подстроки
var str = "Widget with id";
alert( str.indexOf("Widget") ); // 0, найден прямо в начале строки
alert( str.indexOf("with") ); // 7, найден начиная с позиции 1
alert( str.indexOf("widget") ); // -1, не найден
alert( str.indexOf("id", 2) ); // 12 

// Поиск всех вхождений
var str = "Ослик Иа-Иа посмотрел на виадук";
var target = "Иа";

var pos = 0;
while (true) {
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( foundPos );
  pos = foundPos + 1;
}
// Вариант короче:

var pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}


// Взятие подстроки: substring, substr, slice
var str = "stringify";
alert( str.substring(0,1) ); // "s" символы с 0 до 1, не включая 1
str = str.substr(2,4); // со 2-й позиции 4 символа (ring)
alert(str);
// slice() - то же самое что substring, разница в работе с отрицательными
alert( "testme".slice(-2) ); // "me"
alert( "testme".slice(1,-1) ); // "estm"

// Получение символа по его коду
alert( String.fromCharCode(1072) ); // 'a'
// возвращает цифровой код символа
alert( "абрикос".charCodeAt(0) ); // 1072
var str = '';
for (var i = 1034; i <= 1113; i++) {
  str += String.fromCharCode(i);
}
alert( str );

// Пример 1
var str = "хай и привет чувак";

alert( ucFirst(str) );

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

// Пример 2
var str = "buy ViAgRA now";

checkSpam(str);

function checkSpam(str) {
  var newStr = str.toUpperCase();
  
  var viagra = "VIAGRA";
  var xxx = "XXX";

  var pos = 0;
  while (true) {
    var foundPos1 = newStr.indexOf(viagra, pos);
    var foundPos2 = newStr.indexOf(xxx, pos);

    if (foundPos1 != -1 || foundPos2 != -1) {
      alert("Это СПАМ");
      break;
    }
    if (indexOf(newStr) >= pos) {
      break;
    } else {
      pos = foundPos1 + 1;
    }
  }
}

// Вариант из учебника:
function checkSpam(str) {
  var lowerSTR = str.toLowerCase();

  return !!( ~lowerSTR.indexOf('viagra') || ~lowerSTR.indexOf('viagra'));
}


// Пример 3
var str = "Вот, что мне хотелось бы сказать на эту тему";
var maxlength = 20;

alert( truncate(str, maxlength) );

function truncate(str, maxlength) {
  if (str.length >= maxlength) {
    return str.slice(0, maxlength - 3) + '...';
  }

  return str;
}


//  Пример 4
var str = "$2222";

alert( extractCurrencyValue(str) );

function extractCurrencyValue(str) {
  return +str.slice(1);
}