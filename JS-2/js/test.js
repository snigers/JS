describe("pow", function() {
  
  describe("Возводим x в степень n", function() {
    
    function makeTest(x) {
      var expected = x * x * x;
      it("При возведение " + x + " в степень 3 равен: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var i = 1; i <= 5; i++) {
      makeTest(i);
    }

  });

  it("При возведение в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2, -1)));
  });

  it("При возведение в дробную степень результат NaN", function() {
    assert(isNaN(pow(2, 1.5)));
  });

  /* it("При возведение 2 в 3ю степень равен 8", function() {
    assert.equal(pow(2, 3), 8);
  });
  it("При возведение 3 в 4ю степень равен 81", function() {
    assert.equal(pow(3, 4), 81);
  }); */

});