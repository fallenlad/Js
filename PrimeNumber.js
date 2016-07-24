var input = [124, 532, 153, 19, 123, 2];
init();
//console.log('prime - ' + GetPrimeNumbers(GetNearestSquareRoot(GetLargestNumber(input))));
function init() {
    var num, nearestSquareRoot;
    var primeNumbersLessThanLargest, isPrimeNumber, primeNumbers;
    primeNumbersLessThanLargest = GetPrimeNumbers(GetNearestSquareRoot(GetLargestNumber(input)));
    primeNumbers = [];
    for (var i = 0; i < input.length; i++) {
        isPrimeNumber = true;
        for (var j = 0; j < primeNumbersLessThanLargest.length; j++) {
            if (primeNumbersLessThanLargest[j] < input[i] && input[i] % primeNumbersLessThanLargest[j] == 0) {
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber)
            primeNumbers.push(input[i]);
    }
    console.log(primeNumbers);

}

//Get the largest number from the input numbers
function GetLargestNumber(input) {
    var largestNumber;
    largestNumber = input[0];
    for (var x = 0; x < input.length; x++) {
        if (input[x] > largestNumber)
            largestNumber = input[x];
    }
    return largestNumber;
}

//Get prime numbers lesser than the input number
function GetPrimeNumbers(num) {
    var primeNumbers = [];
    var primeNo;
    for (var i = 2; i <= num; i++) {
        primeNo = true;
        for (var key in primeNumbers) {
            if ((i > primeNumbers[key]) && (i % primeNumbers[key] == 0)) {
                primeNo = false;
                break;
            }
        }
        if (primeNo || i === 2)
            primeNumbers.push(i);
    }
    return primeNumbers;
}

//Find the greatest and nearest square root of a number
function GetNearestSquareRoot(num) {
    for (var i = 1; i <= num; i++) {
        if ((i * i) > num)
            return i;
    }
    return 0;
}