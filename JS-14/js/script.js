// Логические преобразования - любой объект в данном
// контексте всегда true
if ([] && {}) {
  alert( 'Все объекты - истина');
} 


// Строковые преобразования
// Для стандартных объектов типа массива или даты, они 
// есть стандартные, для своих объектов можно описать
// свой способ возврата строки в toString
var user = {
  firstName: "Василий",

  toString: function() {
    return 'Пользователь ' + this.firstName;
  }
};

alert( user );


// Численные преобразования
var room = {
  number: 777,

  valueOf: function() {
    return this.number;
  },
  toString: function() {
    return this.number;
  }
};

alert( +room ); // Вызвался valueOf
delete room.valueOf; // valueOf удален
alert( +room ); // Вызвался toString

0
1 - -
-
2 - 11
1234 - 1,23,4
1 - null1
0
0 - [object Object][object Object]

// Пример - Сумма произвольного колличества скобок
function sum(a) {
  
  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15


// Создание объектов через "new"
// Конструкторы
function Animals(name) {
  this.name = name;
  this.canWalk = true;
}

var animal = new Animals("Ежик");
alert( animal.name );

// Создание методов в конструкторе
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Мое имя: " + this.name );
  };
}

var ivan = new User("Иван");

ivan.sayHi();

// Локальные переменные
function User(firstName, lastName) {
  // Вспомогательная переменнная
  var phrase = "Привет";

  // Вспомогательная функция
  function getFullName() {
    return firstName + " " + lastName;
  }

  this.sayHi = function() {
    alert( phrase + ", " + getFullName() );
  };
}

var vasya = new User("Вася", "Петров");
vasya.sayHi();


// Пример 1 - ДВе функции один объект
var obj = {};

function A() {
  return this.a = obj; //Можно проще, просто возврат "obj"
}
function B() {
  return this.b = obj; //Тоже самое
}

var a = new A;
var b = new B;

alert( a == b );

// Пример 2 - Создайте Calculator при помощи конструктора
function Calculator() {
  
  this.read = function() {
    this.a = +prompt('Введите число А', 0);
    this.b = +prompt('Введите число B', 0);
  }

  this.sum = function() {
    return this.a + this.b;
  }

  this.mul = function() {
    return this.a * this.b;
  }
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма = " + calculator.sum() );
alert( "Произведение = " + calculator.mul() );

// Пример 3 - Создать Accumulator при помощи конструктора
function Accumulator(startingValue) {
  this.value = startingValue;
  
  this.read = function() {
    this.value += +prompt('Введите число А', 0);
  };

}

var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert( accumulator.value );

// Пример 4 - Создайте калькулятор
function Calculator() {
  var oper = [];
  var method =[];

  this.addMethod = function(str, func) {
    method[str] = func;
  };


  this.calculator = function(str) {
    // преобразуем строку во временный массив
    var arr = str.split(' ');
    
    if (oper.indexOf(arr[1]) == -1) {
      oper.push(arr[1]);
      this.operacia = oper[oper.indexOf(arr[1])];
      
    } else {
      this.operacia = oper[oper.indexOf(arr[1])];
    }
    
    // добавляем значения в переменные
    this.a = +arr[0];
    this.b = +arr[2];

    for (var key in method) {
      if (key == this.operacia) {
        return method[key](this.a, this.b);
      }
    }

  };


}


var calc = new Calculator;
calc.addMethod("+", function(a, b){
  return a + b;
});
calc.addMethod("*", function(a, b) {
  return a * b;
});
alert( calc.calculator("3 + 7") );
alert( calc.calculator("3 * 11") );