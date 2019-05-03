/* // Объявляя var создает свойство windows.a
var a = 5;
alert( window.a ); */

// На момент инициализации, до выполнения кода:
// window = { f: function, a: undefined, g: undefined}

var a = 5;
// window = { f: function, a: 5, g: undefined}

function f(arg) {}
// window = { f: function, a: undefined, g: undefined}
// Без изменений, f обработанна ранее

var g = function(arg) {};
// window = { f: function, a: 5, g: function}
