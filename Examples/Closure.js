//Closure example
var closureLogger = function () {
    var x = 0;

    var logger = function () {
        console.log(++x);
    };
    return logger;
}

var funcStore = closureLogger();
var funcStore2 = closureLogger();

funcStore();
funcStore();
funcStore2();

//another example for closure
function counter() {
    var n = 0;
    return {
        count: function () { return ++n; },
        reset: function () { n = 0; }
    };
}

var myCounter = counter();
console.log('Count is ' + myCounter.count());
console.log('Increment Count to ' + myCounter.count());
console.log('Increment Count to ' + myCounter.count());
console.log('Reset counter');
myCounter.reset();
console.log('Count is ' + myCounter.count());