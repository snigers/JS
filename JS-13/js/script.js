// Методы у объектов
var user = {
  name: 'Василий'
};

// Метод
user.sayHi = function() {
  alert( this.name );
};

// Вызов
user.sayHi(); //sayHi в контексте user

var user = {
  name: 'Василий',

  sayHi: function() {
    showName(this); //передать текущий объект в showName
  }
};

function showName(nameObj) {
  alert( nameObj.name );
}

user.sayHi();

// Подробнее про this
var user = {
  firstName: "Вася"
};
var admin = {
  firstName: "Админ"
};

function func() {
  alert( this.firstName );
}

user.f = func;
admin.g = func;

// this равен объекту перед точкой
user.f();
admin.g();
admin['g']();

// Значение this при вызове без контекста
// Любой более хитрый вызов приведет к потере контекст:
var user = {
  name: 'Вася',
  hi: function() { alert(this.name); },
  bye: function() { alert("Пока"); }
};

user.hi(); // Вася, простой вызов работает

// А теперь вызовем user.hi или user.bye в зависимости от имени
(user.name == "Вася" ? user.hi : user.bye)(); // undefined


// Пример 1 
var arr = ["a", "b"];
arr.push(function() {
  alert( this );
})

arr[2]();

// пример 2
var method;
var obj = {
  go: function() {
    alert( this );
  }
};
obj.go();
(obj.go)();


// Пример 
var name = "";

var user = {
  name: "Василий",
  export: function() {
    return this;
  }
};

alert( user.export().name );

// Пример (Создайте калькулятор)

var calculator = {
  value: [],
  read: function() {
    var result = [];
    for (var i = 0; i < 2; i++) {      
      result[i] = +prompt('введите число ' + (i+1));      
    }

    return this.value = result;
  },

  sum: function() {
    if (this.value[1] != null) {
      return this.value[0] + this.value[1];
    }
    return "Введите числа";
  },

  mul: function() {
    if (this.value[1] != null) {
      return this.value[0] * this.value[1];
    }
    return "Введите числа";
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );