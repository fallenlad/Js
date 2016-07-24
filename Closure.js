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