/* // Пустой массив
var arr = [];
// С элементами
var fruits = ["Яблоко", "Апельсин", "Слива"];
alert( fruits[0] );
alert( fruits[1] );
alert( fruits[2] );

fruits[2] = "Груша";
alert( fruits[2] );

fruits[3] = "Лимон";

// Общее число элементов массива:
alert( fruits.length );

alert( fruits ); */

// В массиве можно хранить объекты любых типов
/* var arr = [ 1, 'Имя', { name: 'петя'}, true];
alert( arr[2].name ); */

/* // Стек, удаление / добавление из конца массива
var fruits = ["Яблоко", "Апельсин", "Слива"];
alert( fruits.pop() ); //удалили Сливу
alert( fruits );

fruits.push("Груша");
alert( fruits );
// Добавлять можно по несколько элементов сразу
 */

/* // Стек удаление / добавление в начале массива.
var fruits = ["Яблоко", "Апельсин", "Слива"];
alert( fruits.shift() ); //удалили Яблоко
alert( fruits );

// Добавили Яблоко
fruits.unshift('Яблоко');
alert( fruits );
// Добавлять можно по несколько элементов сразу
 */

// Внутреннее устройство массива

/* function eat(arr) {
  arr.pop();
}

var arr = ["нам", "не", "страшен", "серый", "волк"];

alert( arr.length );
eat(arr);
eat(arr);
alert( arr.length ); */

/* // Можно присваивать в массив любые свойства
var fruits = [];
fruits[9999] = 5;
fruits.age = 25; */

/* // Вывод массива с дырами
var a = [];
a[0] = 0;
a[5] = 66;
alert( a ); //Выведет 0,,,,,66 */

/* // Перебор элементов
var arr = ["Яблоко", "Апельсин", "Слива"];
for (var i = 0; i < arr.length; i++) {
  alert( arr[i] );
} */

/* // Укорачивание массива
var arr = [1,2,3,4,5];
arr.length = 2;
alert( arr );
// Назад вернуть нельзя */

/* // Многомерный массив
var matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

alert( matrix[1][1] ); */

/* // Пример 1 (Получить последний элемент массива)
var goods = [1,2,3,4,5,6,7];
alert( goods[goods.length-1] ); */

/* // Пример 2 (Добавить новый элемент в конец массива)
var goods = [1,2,3,4,5,6,7];
goods.push(8);
alert( goods ); */

/* // Пример 3 (Создание массива)
var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[styles.length - 2] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");
alert(styles); */

/* // Пример 4 (Получить случайное значение из массива)
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var min = 0;
var max = arr.length - 1;
var rand = min + Math.floor(Math.random() * (max + 1 - min));
alert( arr[rand] ); */

/* // Пример 5 (Создание калькулятора для введеннных значений)
var arr = [];

while (true) {
  var count = prompt("Введите число");
  if (count === "" || count === null || isNaN(count)) break;
  arr.push(+count);
}

var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

alert( sum ); */

/* // пример 6 (Поиск в массиве)
function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return alert( i );
    }
  }
  return alert(-1);
}

var arr = ["test", 2, 1.5, false];

find(arr, "test");
find(arr, 2);
find(arr, false);
find(arr, 0); */

/* // Пример 7 (Фильтр диапазона)
var arr = [3, 5, 7, 8, 0, 10];

function  filterRange(arr, min, max) {
  var filter = [];
  for ( var i = 0; i < arr.length; i++) {
    if (arr[i] >= min && arr[i] <= max) {
      filter[i] = arr[i];
    }
  }
  return filter;
}

var filtered = filterRange(arr, 2, 6);
alert( filtered ); */

// Пример 8 (Решение Эратосфена для простых чисел)

// Сам не смог сообразить
/* var n = +prompt("Введите N");
var p = 2;
var arr = [];
for (var i = 2; i <= n; i++) {
  arr[i-2] = i;
}

function reshenie(arr, p, n) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }

  for (var i = p; i <= n; i++) {
    if (p*p < n) {
      if (p*i < n) {
        continue;
      } else {
        result.push(arr[i]);
        reshenie(arr, p+1, n);
      }
    }
  }
} */

/* // Вариант учебника:
var arr = [];

for (var i = 2; i < 100; i++) {
  arr[i] = true
}

var p = 2;

do {
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p < 100);

var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}

alert(sum); */

