//Example for callbacks in javascript
var ifElse = function (condition, ifTrue, ifFalse) {
    if (condition) {
        ifTrue();
    } else {
        ifFalse();
    }
}

var logTrue = function () { console.log(true); };
var logFalse = function () { console.log(false); };

ifElse(false, logTrue, logFalse);

