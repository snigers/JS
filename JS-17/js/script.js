/* // Метод Call
function showFullName() {
  alert( this.firstName + " " + this.lastName );
}
// Вызов showFullName.call(user) запустит функцию this = user
var user = {
  firstName: "Василий",
  lastName: "Петров"
};

// Функция вызовется с this = user
showFullName.call(user);


// Более сложный вариант с конструированием ответа
var user = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
  alert( this[firstPart] + " " + this[lastPart] );
}
showFullName.call(user, 'firstName', 'surname');
showFullName.call(user, 'firstName', 'patronym'); */


// Вызовет ошибку
var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
    // alert( this.firstName + ": Привет, " + who );
  }
}
var user1 = {
  firstName: "Петя"/* ,
  sayHi: function() {
    // alert( this.firstName );
    alert( this.firstName + ": Привет, " + who );
  } */
}

// setTimeout(user.sayHi, 1000);

// Решение 1: Сделать обертку
/* setTimeout(function() {
  user.sayHi();
}, 1000); */
// Так же можно передать аргумент
/* setTimeout(function() {
  user.sayHi("Петя");
}, 1000); */

// Решение 2: bind для привязки контекста
// вспомогательная функция
/* function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

function f(a, b) {
  alert( this );
  alert( a + b );
}

var g = bind(f, "Context");
// g(1, 2);
// Вернемся к user.sayHi
setTimeout(bind(user.sayHi, user), 1000); */

// user.firstName = "Петя";


// Решение 3: встроенный метод bind
// setTimeout(user.sayHi.bind(user1), 1000);


// Карринг
/* function mul(a, b) {
  return a * b;
}
// double умножает только на 2
var double = mul.bind(null, 2);

alert( double(3) );
alert( double(4) );
alert( double(5) ); */

// Функция ask для задач
/* function ask(question, answer, ok, fail) {
  var result = prompt(question, '');

  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

function fly() {
  alert( "улетела :)" );
}

function die() {
  alert( "птичку жалко :(" );
}

ask("Выпустить птичку?", "да", fly, die); */


// Задачи
// Пример 1 - кросс-браузерная эмуляция bind
// Для старых версий браузеров, аналог bind
function bind(func, context) {
  var bindArgs = [].slice.call(arguments, 2); //передаем функцию slice от массива к 
  // arguments, вытаскиваем все начиная со 2-го аргумента

  function wrapper() {
    var args = [].slice.call(arguments); //передаем функцию slice от массива к 
    // arguments, вытаскиваем все аргументы
    var unshiftArgs = bindArgs.concat(args); //Объединяем оба массива в один
    return func.apply(context, unshiftArgs); //Вызов функции с контекстом и общим массивом аргументов
  }

  return wrapper;
}

// Пример 2
/* function f() {
  alert( this );
}

var user = {
  g: f.bind("Hello")
}

user.g(); */

/* // Пример 3
function f() {
  alert( this.name );
}

var user1 = {
  name: "Вася"
}
var user2 = {
  name: "Петя"
}
f = f.bind( user1 ).bind( user2 );

f();

user1.name = "Гена";
f(); */

/* // Пример 5 - Использование функции вопроса
function ask(question, answer, ok, fail) {
  var result = prompt(question, '');

  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    alert( this.login + ' вошел на сайт' );
  },

  loginFail: function() {
    alert( this.login + ': ошибка входа' );
  },

  checkPassword: function() {
    ask("Ваш пароль?",
     this.password, 
     this.loginOk.bind(this), 
     this.loginFail.bind(this) 
    );
  }
};
var vasya = user;
user = null;
vasya.checkPassword(); */

// Пример  6 - Использование функции вопросов с каррингом
"use strict"

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // Метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошел на сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password,
      this.loginDone.bind(this, true),
      this.loginDone.bind(this, false)
    );
  }
};
user.checkPassword();
var vasya = user;
user = null,
vasya.checkPassword();