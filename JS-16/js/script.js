// Статические методы
function Article() {
  Article.count++;
}

Article.count = 0;

Article.showCount = function() {
  alert( this.count );
}

// Исполнение
new Article();
new Article();
Article.showCount();

// Пример: сравнение объектов
function Journal(date) {
  this.date = date;

  this.formatDate = function(date) {
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  };

  this.getTime = function() {
    return "Выпуск от " + this.formatDate(this.date);
  }
}

// Возвращаем значение, больше 0 если А больше В, иначе меньше 0
Journal.compare = function(journalA, journalB) {
  return journalA.date - journalB.date;
};

// Исполнение
var journals = [
  new Journal(new Date(2012, 1, 1)),
  new Journal(new Date(2012, 0, 1)),
  new Journal(new Date(2011, 11, 1))
];

function findMin(journals) {
  var min = 0;
  for (var i = 0; i < journals.length; i++) {
    // Используем статический метод
    if (Journal.compare(journals[min], journals[i]) > 0) min = i;
  }

  return journals[min];
}

alert( findMin(journals).getTime() );


// Фабричные методы
// Полиморфная функция-конструктор
function User(userData) {
  /* if (userData) { //если указанны данные - одна ветка
    this.name = userData.name;
    this.age = userData.age;
  } else { //если не указанны - другая
    this.name = "Аноним";
  }
 */
  this.sayHi = function() {
    alert( this.name );
  };
}

User.createAnonymous = function() {
  var user = new User;
  user.name = 'Аноним';
  return user;
}

User.createFromData = function() {
  var user = new User;
  user.name = userData.name;
  user.name = userData.age;
  return user;
}
// Использование
var guest = User.createAnonymous();
guest.sayHi();

var knownUser = User.createFromData({
  name: "Вася",
  age: 25
});
knownUser.sayHi();