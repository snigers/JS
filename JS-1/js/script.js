var ourPlanetName = "Земля";
var userName = "Петя";

var apples =  "2";
var orange = "3";

// alert(+apples + +orange);

// alert( 5 % 2 );

// var i = 1;
// alert ( 2 * i++ );
// alert ( i );
// alert ( 2 * i++ );
// alert ( i );

// var n = 2;
// n += 5;
// alert( n );
// n *= 2;
// alert( n );

// alert( 2 > 1 );

// var access = parseInt("11000", 2);
// alert(access);
// var access2 = access.toString(2);
// alert(access2); 

/* var str = "Проверка";
if ( ~str.indexOf("верка")) {
  alert( 'Найдено!' );
} */

/* function isInteger(num) {
  return (num ^ 0) === num;
}
isInteger(5);
alert(isInteger(5)); */

/* var years = prompt('Сколько вам лет?', 100);

alert('Вам ' + years + ' лет!'); */
/* var isAdmin = confirm('Вы - администратор?');
alert(isAdmin); */

// var year = prompt('В каком году появилась спецификация ECMA-262 5.1', "");
/* if (year < 2011) {
  alert('Это слишком рано');
} else if (year > 2011) {
  alert('Это слишком поздно');
} else {
  alert('Да, точно в этом году');
} */
// var access;

// access = (year == 2011) ? true : false;

/* var name = prompt('Введите число:', "");
if (name > 0) {
  alert("1");
} else if (name < 0) {
  alert("-1");
} else {
  alert("0");
} */

/* var admin = prompt('Введите логин:', "");

if (admin == "admin") {

  var pass = prompt('Введите пароль:', "");

  if (pass == "Черный Властелин") {
    alert("Добро пожаловать!");
  } else if (pass == null) {
    alert("Вход отменен");
  } else {
    alert("Пароль не верен!");
  }
  
} else if (admin == null) {
  alert("Вход отменен");

} else {

  alert("Логин не верен!");

} */

var a = 2;
var b = 1;
var result;
(a + b < 4) ? result = 'Мало' : result = 'Много';
alert(result);