var str = "Привет, мир!";
// alert( str.toUpperCase() );

var n = 1.2455;
// alert( n.toFixed(2) );
// alert( n.toFixed(0) );
// alert( n.toFixed(5) );

// alert( Infinity > 1234342342 );
// alert( 1e500 );

// var value = prompt("Введите Infinity", 'Infinity');

// var number = +value;

// alert( number );

// alert( isFinite(1) );
// alert( isFinite(Infinity) );
// alert( isFinite(NaN) );

// alert( parseInt('m12px') );
// alert( parseInt('FF', 16) ); //В 16-ричной 255

// var x = prompt("Введите значение", "-11.5")

// if ( isNaN(x) ) {
//   alert("Строка преобразовалась в NaN. Не число");
// } else {
//   alert("Число");
// }


/* Если же нужна действительно точная проверка на число, которая не
 считает числом строку из пробелов, логические и специальные значения,
  а также отсекает Infinity – используйте следующую функцию  
  Вызов parseFloat(true/false/null/'') вернёт NaN для этих значений.
*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinity(n);
}


// alert( Math.floor(3.1) );
// alert( Math.ceil(3.1) );
// alert( Math.round(3.5) );

/* Округление до нужного числа  */
// var n = 3.543;
// alert( Math.round(n * 100) / 100 ); // До второго знака после запятой

// alert( (0.1 * 10 + 0.2 * 10) / 10 == 0.3 );

/* var a = +prompt("введите a");
var b = +prompt("введите b");

alert( a + b ); */
// alert( fibBinet(77) );
// // alert( (1 + Math.sqrt(5)) / 2 );
// function fibBinet(n) {
//   var fi = (1 + Math.sqrt(5)) / 2;
//   return Math.round(Math.pow(fi, n) / Math.sqrt(5));
// }

var num = +prompt("Введите num");


alert( num * Math.random() );