const add = function(a, b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total,curr) => total + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((total,curr) => total * curr, 1);
};

const power = function(a, b) {
  let r = 1;
	for (let i = 0; i < b; i ++){
    r *= a;
  };
  return r;
};

const factorial = function(a) {
	let r = 1;
  for (a; a > 0; a--){
    r *= a;
  };
  return r;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
