const fibonacci = function(arg) {
    if (typeof(arg) === 'string') {
        arg = parseInt(arg);
    };
    if (arg < 0) {
        return 'OOPS';
    };
    if (arg === 1) {
        return 1;
    } else if (arg ===0){
        return 0;
    }else{
        return fibonacci(arg - 1) + fibonacci (arg-2)
    };
};

// Do not edit below this line
module.exports = fibonacci;
