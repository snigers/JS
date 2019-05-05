// Дескрипторы в примерах
// Обычное свойство
var user = {};
// Простое присваивание
user.name = "Вася";
// Указания значения через дескриптр
Object.defineProperty(user, "name", { value: "Вася", configurable: true, writable: true, enumerable: true});

// свойство - константа
"use strict";
var user = {};

Object.defineProperty(user, "name", {
  value: "Вася",
  writable: false, //запретить присвоение user.name=
  configurable: false //запретить удаление
});

// Теперь попытаемся изменить это свойство
alert( user.name = "Петя" );

// Свойство, скрытое для for...in
var user = {
  name: "Вася",
  toString: function() {return this.name}
};

// Помечаем toString как не подлежащий перебору
Object.defineProperty(user, "toString", {enumerable: false});

for (var key in user) alert(key);

// Свойство - функция
var user = {
  firstName: "Вася",
  surname: "Петров"
}

Object.defineProperty(user, "fullName", {
  get: function() {
    return this.firstName + ' ' + this.surname;
  },

  set: function(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
  }
});

user.fullName = "Петя Иванов";
alert( user.firstName );
alert( user.surname );


// Указание get/set в литералах
var user = {
  firstName: "Вася",
  surname: "Петров",

  get fullName() {
    return this.firstName + ' ' + this.surname;
  },

  set fullName(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
  }
};

alert( user.fullName );

user.fullName = "Петя Иванов";
alert( user.firstName );
alert( user.surname );

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age будет высчитывать возраст по birthday
  Object.defineProperty(this, "age", {
    get: function() {
      var today = new Date();
      var yearDelta = today.getFullYear() - this.birthday.getFullYear();

      if (today.getMonth() > this.birthday.getMonth() ||
        (today.getMonth() === this.birthday.getMonth() && today.getDate() >= this.birthday.getDate())) {
          return yearDelta;
        }
      return yearDelta - 1;
    }
  });
}

var pete = new User("Петя", new Date(1987, 6, 1));
alert( pete.birthday );
alert( pete.age );


// Object.defineProperties - сразу несколько св-в
var user = {};

Object.defineProperties(user, {
  firstName: {
    value: "Петя"
  },

  surname: {
    value: "Иванов"
  },

  fullName: {
    get: function() {
      return this.firstName + ' ' + this.surname;
    }
  }
});

alert( user.fullName );

// Object.keys - возвращает массив свойств объекта
var obj = {
  a: 1,
  b: 2,
  internal: 3
};

Object.defineProperty(obj, "internal", {
  enumerable: false
});

alert( Object.keys(obj) );
alert( Object.getOwnPropertyNames(obj) ); // Все свойства

// Пример 
function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {
    firstName: {
      get: function() {
        return this.fullName.split(' ')[0];
      },
      
      set: function(newFirstName) {
        this.fullName = newFirstName + ' ' + this.lastName;
      }
    },

    lastName: {
      get: function() {
        return this.fullName.split(' ')[1];
      },
      
      set: function(newLastName) {
        this.fullName = this.firstName + ' ' + newLastName;
      }
    }
  });
}

var vasya = new User("Василий Попкин");

alert( vasya.firstName );
alert( vasya.lastName );

vasya.lastName = "Сидоров";

alert( vasya.fullName );