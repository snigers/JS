var userName = 'Вася';

function showMessage(from, text) {
  if (text === undefined) {
    text = 'Текст не передан';
  }
  from = "** " + from + " **";
  
  alert(from + ': ' + text);
}

function count() {
  for (var i = 0; i < 3; i++) {
    var j = i * 2;
  }
  alert(i);
  alert(j);
}

function calcD(a, b, c) {
  return b * b - 4 * a * c;
}

var test = calcD(-4, 2, 1);
// alert(test);

function chackAge(age) {
/*   if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  } */
  return (age > 18) || confirm('Родители разрешили?');
}

// var age = prompt('Ваш возраст?');

// if (chackAge(age)) {
//   alert('Доступ разрешен');
// } else {
//   alert('В доступе отказано');
// }

// count();
// showMessage('Маша', 'Привет!');
// showMessage('Маша');
// var a = prompt('a');
// var b = prompt('b');
// alert(pow(a,b));
function pow(a, b) {
  var num = a;

  if (b == 0) {
    num = a * 0;
  } else if (b == 1) {
    num = a;
  } else if (b < 0) {
    num = 'Пока не могу вычислить :(';
  } else {
    for (var i = 1; i < b; i++) {
      num = num * a;
    }
  }
  return num;
}

// var age = prompt("Сколько вам лет?");

// var sayHi = (age >= 18) ?
//   function() {alert('Прошу вас!');} :
//   function() {alert('До 18 нельзя!');};

// sayHi();

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

// function showOk() {
//   alert('Вы согласились.');
// }

// function showCancel() {
//   alert('Вы отказались.');
// }

// ask(
//   "Вы согласны?",
//   function() {alert('Вы согласились.');},
//   function() {alert('Вы отказались.');}
// );

function sumTo(n) {
  var result = 0;
  for (var i = 1; i <= n; i++) {
    
    result += i; 
  }
  return result;
}

alert(sumTo(100));

