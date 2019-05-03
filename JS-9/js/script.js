// Пример: копирование свойств объектов
var vasya = {
  age: 21,
  name: "Вася",
  surname: "Петров"
};

var user = {
  isAdmin: false,
  isEmailConfirmed: true
};

var student = {
  university: "My university"
};

// Добавить к Васе свойства из User и Student
copy(vasya, user, student);

alert( vasya.isAdmin );
alert( vasya.university );

function copy() {
  var dst = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    var arg = arguments[i];
    for (var key in arg) {
      dst[key] = arg[key];
    }
  }

  return dst;
}

// Аргумент по умолчанию через ||
function showWarning(width, height, title, contents) {
  // В простом варианте
  width = width || 200;
  height = height || 100;
  title = title || "Предупреждение";
  // ..................
  // Если нужно строгая проверка на undefined
  if ( width === undefined) width = 200;
  if ( height === undefined) height = 100;
  if ( title === undefined) title = "Предупреждение";
}