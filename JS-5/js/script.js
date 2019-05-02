// Создание ассоциативного массива
// Вариант 1
var o = new Object();
// Вариант 2
var o = {}; //Используется чаще

var person = {};

person.name = 'Вася';
person.age = 25;

alert( person.name + ': ' + person.age );

// Удаление объекта массива
delete person.age;
alert( person.name );

// Проверка есть ли ключ в данном объекте
if ("name" in person) {
  alert( "Свойство name существует!");
}
alert( "name" in person );
// Чаще сравнивают на undefined, единственный вариант
// Если св-во существвует и равно undefined, тогда проверять in
alert( person.lalala === undefined); //true такого св-ва не существует

// Доступ к св-ву доступен и так:
var str = {};
str['name'] = 'Вася';
// Позволяет в качестве ключа ввести любую строку
// Или использовать переменную
var str2 = {};
str2.age = 25;
var key = 'age';

alert( str2[key] );


// Варианты заполнения массива:
var menuSetup = {
  width: 300,
  height: 200,
  title: "Menu"
};
// То же самое:
var menuSetup = {};
menuSetup.width = 300;
menuSetup.height = 200;
menuSetup.title = "Menu";

// Ключи можно брать в кавычки или нет
var menuSetup = {
  width: 300,
  'height': 200,
  "мама мыла раму": true
}

// В качестве значения можно указать и другой объект
var user = {
  name: "Таня",
  age: 25,
  size: {
    top: 90,
    middle: 60,
    bottom: 90
  }
}

alert(user.name);
alert(user.size.top);


// Перебор свойств

var menuSetup = {
  width: 300,
  height: 200,
  title: "Menu"
};

for (var key in menuSetup) {
  alert( "Ключ: " + key + " значение: " + menuSetup[key] );
}

// Если все ключи численные, то они отсортируются автоматом
// Чтобы недопустить этого можно сделать так:
var codes = {
  "+7": "Россиия",
  "+38": "Украина",
  "+1": "США"
};

for (var code in codes) {
  var value = codes[code];
  code = +code; // +7 => 7

  alert( code + ": " + value);
}


// Пример 1
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
}

var schedule = {};
alert( isEmpty(schedule) == undefined );

schedule["8:30"] = "подъем";
alert( isEmpty(schedule) );

// Пример 2
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 450
}

var sum = 0;
var name = '';
for (var key in salaries) {
  // sum += salaries[key];
  if (sum <= salaries[key]) {
    sum = salaries[key];
    name = key;
  }
}

if (name == '') {
  alert( "Нет сотрудников");
} else {
  alert(name);
}

// Пример 3
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(menu) {
  for (var key in menu) {
    if (isNumeric(menu[key])) {
      menu[key] = menu[key] * 2;
    }
  }
}

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

multiplyNumeric(menu);
alert( menu["width"] + ":" + menu["height"] + ":" + menu["title"]);

