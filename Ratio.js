//var input = { boys: 1071, girls: 462 };
process.stdin.resume();
process.stdin.setEncoding("utf-8");
process.stdin.on("data", function (input) {
    Init(input.replace(/\r\n|\n|\r/gm, '').split(' '));
});


function Init(input) {
    var gcd, ratio, classroom;
    if (input.length == 2)
        classroom = { boys: input[0], girls: input[1] };
    //Get reduced ratio output    
    gcd = GetGcd(classroom.boys, classroom.girls);
    ratio = (classroom.boys / gcd) + ':' + (classroom.girls / gcd);
    console.log(ratio);
}

function GetGcd(a, b) {
    var largestNumber, smallestNumber, remainder;
    if (a > b) {
        largestNumber = a;
        smallestNumber = b;
    }
    else {
        largestNumber = b;
        smallestNumber = a;
    }
    while (largestNumber % smallestNumber != 0) {
        remainder = largestNumber % smallestNumber;
        largestNumber = smallestNumber;
        smallestNumber = remainder;
    }
    if (remainder === undefined)
        remainder = smallestNumber;
    return remainder;
}