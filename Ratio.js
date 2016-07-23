//var input = { boys: 1071, girls: 462 };
//Command line input
//Sample input - 1071 462
process.stdin.resume();
process.stdin.setEncoding("utf-8");
process.stdin.on("data", function (input) {
    Init(input.replace(/\r\n|\n|\r/gm, '').split(' '));
});

//Find the ratio of boys and girls in a classroom
function Init(input) {
    var gcd, ratio, classroom;
    if (input.length == 2)
        classroom = { boys: input[0], girls: input[1] };
    //Get simplified ratio output    
    gcd = GetGcd(classroom.boys, classroom.girls);
    ratio = (classroom.boys / gcd) + ':' + (classroom.girls / gcd);
    console.log(ratio);
}

//Find the gcd for the two numbers
function GetGcd(a, b) {
    var largestNumber, smallestNumber, remainder;
    //Find the biggest and smallest numbers of the two
    if (a > b) {
        largestNumber = a;
        smallestNumber = b;
    }
    else {
        largestNumber = b;
        smallestNumber = a;
    }
    //Find the smallest and largest number where smallest number will be the remainder obtained by dividing
    //largest number by smallest one and largest number will be the previous smallest number.
    //Repeat the above till the remainder is zero
    while (largestNumber % smallestNumber != 0) {
        remainder = largestNumber % smallestNumber;
        largestNumber = smallestNumber;
        smallestNumber = remainder;
    }
    if (remainder === undefined)
        remainder = smallestNumber;
    return remainder;
}