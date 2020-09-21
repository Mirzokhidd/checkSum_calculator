var checkSum = function(value) {
    var x = value;
    var y = Math.floor(x/256);
    var solution = x - (y * 256);

    return "Checksum: " + solution;
};

console.log(checkSum(#value));