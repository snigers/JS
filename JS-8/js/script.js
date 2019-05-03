// forEach - метод перебора всего массива
var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});

// filter - фильтрация массива через функцию
var arr = [1, -1, 2, -2, 3];

var positiveArr = arr.filter(function(number) {
  return number > 0;
});

alert( positiveArr );

// map - создает новый массив который будет состоять из результатов вызова callback
var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function(name) {
  return name.length;
});

// Получим массив с длинной
alert( nameLengths );

// every / some - используются для проверки массива
// every - вернет true, если все элементы возвращают true
// some - вернет true если хоть один элемент возвращает true
var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

alert( arr.every(isPositive) );
alert( arr.some(isPositive) );

// reduce / reduceRight - используется для последовательной обработки каждого 
// элемента массива с сохранением промежуточного результата
var arr = [1, 2, 3, 4, 5];

// Для каждого элемента массива запускается функция
// промежуточный результат передается первым аргументом далее
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( result );

// Пример 1 (Переписать цикл через map)
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(name) {
  return name.length;
})
alert( arrLength );

// Пример 2 (Массив частичных сумм)
var arr = [1, 2, 3, 4, 5];

alert( getSums1(arr) );

// мой вариант
function getSums(arr) {
  var result =[];
  var prom =[];

  for (var i = 0; i < arr.length; i++) {
    prom.push(arr[i]);
    result[i] = prom.reduce(function(sum, current) {
      return sum + current;
    });
  }
  return result;
}

// Вариант учебника
function getSums1(arr) {
  var result =[];
  if (!arr.length) return result;

  var totalSum = arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });
  result.push(totalSum);

  return result;
}