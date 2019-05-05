/* // Метод Call
function showFullName() {
  alert( this.firstName + " " + this.lastName );
}
// Вызов showFullName.call(user) запустит функцию this = user
var user = {
  firstName: "Василий",
  lastName: "Петров"
};

// Функция вызовется с this = user
showFullName.call(user);


// Более сложный вариант с конструированием ответа
var user = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
  alert( this[firstPart] + " " + this[lastPart] );
}
showFullName.call(user, 'firstName', 'surname');
showFullName.call(user, 'firstName', 'patronym'); */

