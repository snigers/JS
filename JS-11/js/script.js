/* // Объявляя var создает свойство windows.a
var a = 5;
alert( window.a ); */

// На момент инициализации, до выполнения кода:
// window = { f: function, a: undefined, g: undefined}

/* var a = 5;
// window = { f: function, a: 5, g: undefined}

function f(arg) {}
// window = { f: function, a: undefined, g: undefined}
// Без изменений, f обработанна ранее

var g = function(arg) {};
// window = { f: function, a: 5, g: function} */

/* // Пример
function sayHi(name) {
  var phase = "Привет, " + name;
  alert( phase ); 
}

sayHi('Вася'); */

/* // Значение внешней переменнной всегда берется текущее на момент вызова функции
var phrase = 'Привет';

function sayHi(name) {
  alert( phrase + ', ' + name ); 
}

sayHi('Вася');

phrase = 'Пока';

sayHi('Вася'); */

/* // Вложенные функции
function sayHibye(firstName, lastName) {

  alert( "Привет, " + getFullName() );
  alert( "Пока, " + getFullName() );

  function getFullName() {
    return firstName + " " + lastName;
  }
}

sayHibye("Вася", "Пупкин"); */

/* // Возврат функции

function makeCounter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  }
}

var counter = makeCounter();
// Каждый вызов увеличивает счетчик и возвращает результат
alert( counter() );
alert( counter() );
alert( counter() );

// Создать другой счетчик, он будет полностью независим
var counter2 = makeCounter();

alert( counter2() );
alert( counter() ); */

// Свойства функции
function makeCounter() {
  function counter() {
    return counter.currentCount++;
  }
  counter.currentCount = 1;

  return counter;
}

var counter = makeCounter();
alert( counter() );
alert( counter() );