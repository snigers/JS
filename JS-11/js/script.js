// Объявляя var создает свойство windows.a
var a = 5;
alert( window.a );

// На момент инициализации, до выполнения кода:
window = { f: function, a: undefined, g: undefined}

var a = 5;
// window = { f: function, a: 5, g: undefined}

function f(arg) {}
// window = { f: function, a: undefined, g: undefined}
// Без изменений, f обработанна ранее

var g = function(arg) {};
// window = { f: function, a: 5, g: function}

// Пример
function sayHi(name) {
  var phase = "Привет, " + name;
  alert( phase ); 
}

sayHi('Вася');

// Значение внешней переменнной всегда берется текущее на момент вызова функции
var phrase = 'Привет';

function sayHi(name) {
  alert( phrase + ', ' + name ); 
}

sayHi('Вася');

phrase = 'Пока';

sayHi('Вася');

// Вложенные функции
function sayHibye(firstName, lastName) {

  alert( "Привет, " + getFullName() );
  alert( "Пока, " + getFullName() );

  function getFullName() {
    return firstName + " " + lastName;
  }
}

sayHibye("Вася", "Пупкин");

// Возврат функции

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
alert( counter() );

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

// Счетчик - объектов
function makeCounter() {
  var currentCount = 1;

  return { // Воыратим объект вместо функции
    getNext: function() {
      return currentCount++;
    },

    set: function(value) {
      currentCount = value;
    },

    reset: function() {
      currentCount = 1;
    }
  };
}

var counter = makeCounter();

alert( counter.getNext() );
alert( counter.getNext() );

counter.set(5);
alert( counter.getNext() );

// Объект счетчика + функция
function makeCounter() {
  var currentCount = 1;

  // Возвращаемся к функции
  function counter() {
    return currentCount++;
  }

  // И добавляем ей методы!

  counter.set = function(value) {
      currentCount = value;
    };

  counter.reset = function() {
      currentCount = 1;
    };
  
  return counter;
}

var counter = makeCounter();

alert( counter() );
alert( counter() );

counter.set(5);
alert( counter() ); */


/* // Пример 1 - Сумма через замыкание
function sum(a) {
  
  return function(b) {
    return a + b;
  };
}

alert( sum(1)(2) );

// Пример 2 / 3 - Функция-строковый буфер
function makeBuffer() {
  var buffer = '';
 
  function bufferStr(str) {
    if (str === undefined) {
      return buffer;
    }
    
    buffer += str;
    return buffer;
  };

  bufferStr.clear = function() {
    buffer = '';
  }

  return bufferStr;

}

var buffer = makeBuffer();
buffer('Привет');
// alert( buffer() );
buffer();
buffer(' Андрей');

alert( buffer() );

buffer.clear();

buffer('Игорь');

alert( buffer() );


// Пример 4 - Сортировка
function byField(key) {
  if (key === 'name' || key === 'surname' || key === 'age') {
  
    return function(a, b) {
      return a[key] > b[key] ? 1 : -1;};
  } 
  
  return 'Неправильные данные';
}

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
});

// Пример 5 - Фильтрация через функцию
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var arr2 = [1, 2, 10];

function filter(arr, func) {
  return func;
}

function inBetween(min, max) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    
    if (arr[i] >= min && arr[i] <= max) {
      result.push(arr[i]);
    }
  }

  return result;
}

function inArray(arr2) {
  var result = [];
  
  for (var i = 0; i < arr2.length; i++) {
    
    if (arr.indexOf(arr2[i]) >= 0) {
      result.push(arr2[i]);
      // alert('есть такое ' + i)
    }
  }

  return result;
}
// alert( arr );
alert( filter(arr, inBetween(3, 6)) );
alert( filter(arr, inArray(arr2)) );

// Пример 6 - Армия функций
// Есть еще 2 варианта красивых, ГЛАВА 5.4
function makeArmy() {
  var shooters = [];
  
  for (var i = 0; i < 10; i++) {
    var shooter = function me() {
      alert( me.i );
    };
    shooter.i = i;
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[3]();