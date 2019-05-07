// Декоратор - таймер
// function f(x) {}
/* var timers = {}; //объект для таймера */

// отдекодировали
// f = timingDecorator(f, "myFunc");

// Запускаем
/* f(1);
f(2);
f(3); */ //функция работает как раньше, но время подсчитывается

// alert( timers.myFunc );
/* 
function timingDecorator(f, timer) {
  return function() {
    var start = performance.now();

    var result = f.apply(this, arguments);

    if (!timers[timer]) timers[timer] = 0;
    timers[timer] += performance.now() - start;

    return result;
  }
}

// функция может быть произвольнойб например такой:
var fibonachi = function f(n) {
  return (n > 2) ? f(n - 1) + f(n - 2) : 1;
}

// использование завернет ФИБОНАЧИ в декоратор
fibonachi = timingDecorator(fibonachi, "fibo");

// неоднократный вызов
alert( fibonachi(10) );
alert( fibonachi(20) );

// В любой момент можно получить общее колличество времени на вызов
alert( timers.fibo + 'ms' ); */


// Декоратор для проверки типа
// вспомогательная функция для проверки на число
/* function checkNumber(value) {
  return typeof value == "number";
}

// Декоратор проверяющий типы для Ф
// второй аргумент checks - массив с функцией для проверки
function typeCheck(f, checks) {
  return function() {
    for (var i = 0; i < arguments.length; i++) {
      alert(arguments[i]);
      if (!checks[i](arguments[i])) {
        alert( "Некорректный тип фргумента номер " + i);
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function sum(a, b) {
  return a + b;
}

// Обернем декоратор для проверки
sum = typeCheck(sum, [checkNumber, checkNumber]); // Оба аргумента числа

// пользуемся функцией
alert( sum(1, 2) );

// Передаем в функцию для сложения чисел нечилсовое значение
alert( sum(true, { name: "Вася", age: 35 }) ); */

// Пример 1 - Логирующий декоратор (1 аргумент)
var user = {
  method: function(a, b) {
    return a * b;
  }
}

function makeLogging(f, log) {
  return function() {
   /*  for (var i = 0; i < arguments.length; i++) {
      log.push(arguments[i]);
    } */
    log.push([].slice.call(arguments));
    return f.apply(this, arguments);
  };
}

var log = [];
user.method = makeLogging(user.method, log);

alert( user.method(2, 3) );
alert( user.method(3, 3) );
alert( user.method(5, 4) );

for (var i = 0; i < log.length; i++) {
  alert( 'Лог: ' + log[i] );
}