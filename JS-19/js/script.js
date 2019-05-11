var toString = {}.toString;

var arr = [1, 2];
alert( toString.call(arr) );

var date = new Date;
alert( toString.call(date) );

var user = { name: "Вася" };
alert( toString.call(user) );

// Формат JSON
var numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

// alert( numbers[1] );

// ИЛИ

var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0, 1, 2, 3] }';

user = JSON.parse(user);

alert( user.friends[0] );

// Умный разбор: JSON.parse
var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';
var event = JSON.parse(str, function(key, value) {
  if (key =='date') return new Date(value);
  return value;
});

alert( event.date.getDate() );

// Работает и для вложенных объектов
var schedule = '{ \
  "events": [ \
    {"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}, \
    {"title":"День рождения","date":"2015-04-18T12:00:00.000Z"} \
  ]\
}';

schedule = JSON.parse(schedule, function(key, value) {
  if (key =='date') return new Date(value);
  return value;
});

alert( schedule.events[1].date.getDate() );

// Сериализация, метод JSON.stringify
var event = {
  title: "Конференция",
  date: "сегодня"
};

var str = JSON.stringify(event);
alert( str );

// Обратное преобразование
event = JSON.parse( str );

// Исключение свойств
var user = {
  name: "Вася",
  age: 25,
  window: window
};

alert( JSON.stringify(user, ["name", "age"]) );

// Красивое форматирование
var user = {
  name: "Вася",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

var str = JSON.stringify(user, "", 4);

alert( str );

// Пример 1
var leader = {
  name: "Василий Иванович",
  age: 35
};

var str = JSON.stringify(leader);
alert( str );
var str1 = JSON.parse(str);
alert( str1 );

// Пример 2 - НЕПРАВИЛЬНО
var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];
// alert( team[0].name );
var str = JSON.stringify(team, function(key, value) {
  var result = {};
  for (var i = 0; i < team.length; i++) {
    for (var keys in team[i]) {
      if (keys == 'name') {
        result[keys] = team[i][keys];
        return result;
      }
    }
  }
  
});
alert( str );