// basic closure example
var passed = 3;

var addTo = function() {
  var inner = 2;
  return passed + inner;
};

console.log(addTo());
