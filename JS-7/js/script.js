// Метод split, есть второй аргумент ('', N) - можно
// дополнительно указать колличество элементов массива
var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  alert( 'Вам сообщение от ' + arr[i]);
}
// Еще вариант:
var str = "test";
alert( str.split('') ); //t,e,s,t

// метод join - делает противоположное split
var arr = ['Маша', 'Петя', 'Марина', 'Василий'];

var str = arr.join(';');
alert(str); //Склеил в строку


// Удаление из массива ключ-значение, делает дырку
var arr = ["Я", "иду", "домой"];
delete arr[1];
alert( arr[1] );

// Метод splice - удаление из середины
var arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1,1); //Начиная с позиции 1, удалить 1 элемент
alert( arr );

var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
// Удалим 3 первых элемента и добавим другие
arr.splice(0, 3, "Мы", "изучаем");
alert( arr );

var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
var removed = arr.splice(0, 2);
alert( removed );

var arr = ["Я", "изучаю", "JavaScript"];
// С позиции 2 удалить 0, вставить...
arr.splice(2, 0, "сложный", "язык");
alert( arr );

// допускается использование отрицательных чисел
var arr = [1, 2, 5];
// начиная с позиции -1 (перед последним элементом)
// удалить 0
// вставить чилса 3 и 4
arr.splice(-1, 0, 3, 4);
alert( arr );

// Метод slice копирует участок массива не включая окончание
var arr = ["Почему", "надо", "учить", "JavaScript"];
var arr2 = arr.slice(1, 3);
alert( arr2 );


// Сортировка метод sort(fn)
var arr = [1, 2, 15];
arr.sort();
alert( arr );

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
arr.sort(compareNumeric);
alert( arr );

// Метод reverse
var arr = [1, 2, 3];
arr.reverse();
alert( arr );

// метод concat - копирует массив и может добавить новые элементы
var arr = [1, 2];
var newArr = arr.concat(3, 4);
alert( newArr );

// Метод indexOf / lastIndexOf
var arr = [1, 0, false];
alert( arr.indexOf(0) );
alert( arr.indexOf(false) );
alert( arr.indexOf(null) );

// Метод Object.keys(obj) - работа с ключами объекта как
// с массивом
var user = {
  name: "Петя",
  age: 30
}
var keys = Object.keys(user);
alert( keys );

// Пример 1 (Добавить класс в строку)
var obj = {
  className: 'open menu'
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert( obj.className );

function addClass(obj, cls) {
  var str = obj.className;
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(cls) < 0) {
      arr.push(cls);
    }
  }
  return obj.className = arr.join(' ');
}

// Пример 2 (Перевести текст из вида в вид)
var str = "list-style-image";

alert( str = camelize(str) );

function camelize(str) {
  var arr = str.split('-');

  if (arr.length == 1) return str = arr.join('');

  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  
  return str = arr.join('');
}

// Пример 3 (Функция remopveClass)
var obj = {
  className: 'open menu menu my'
}

removeClass(obj, 'open');
alert( obj.className );

function removeClass(obj, cls) {
  var arr = obj.className.split(' ');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(cls) >= 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  return obj.className = arr.join(' ');
} 

// Пример 4 (Фильтрация массива на месте)
var arr = [5, 3, 8, 1];

alert( filterRangeInPlace(arr, 1, 6) );

function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1); // i-- можно прямо здесь вставить
      i--;
    }
  }
  return arr;
}

// Пример 5 (Сортировка объектов)
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareReversed);
for (var i = 0; i < people.length; i++) {
  alert(people[i].name);
}


function compareReversed(a, b) {
  return a.age - b.age;
}

// Вывести односвязный список
var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);

function printList(list) {
  var tmp = list;

  while (tmp) {
    alert( tmp.value );
    tmp = tmp.next;
  }

  // Рекурсивный вариант
  alert( list.value ); //(1)

  if (list.next) {
    printList(list.next);  //(2)
  }

  // Для обратного вывода меняем местами (1) и (2)
  // Тогда сначала обрабатывается следующее значение, а потом уже выводится
  
}

// Пример 7 (отсортировать Анаграмму)
function aclean(arr) {
  // Этот объект используется для уникальности
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    // Разбить строку на буквы, отсортировать и слить обратно
    var sorted = arr[i].toLowerCase().split('').sort().join('');
    // Приведение слова к сортированному по буквам виду осуществляется 
    // цепочкой вызовов в строку

    obj[sorted] = arr[i]; //Сохраняем только одно значение с таким ключом
  }

  var result = [];

  // Теперь в obj находится каждого ключа ровно одно значение
  for (var key in obj) {
    result.push(obj[key]);
  }

  return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) );

// Пример 8 (Оставить уникальные элементы массива)

// Мой вариант 
function unique(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) < 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Учебник предлагает через объекты:
function unique1(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; //Запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); //Или собрать ключ перебором;
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique1(strings) );
alert( unique(strings) );