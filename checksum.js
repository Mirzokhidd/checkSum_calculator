//You can run the code through the terminal by specifying the path and running the text, "node java.ja"
//Or you can just run it rhought the 'Run code' to output function of visual studious

//-------------------------------------------------------------------------------------------------------------

var checkSum = function(value) {
    var x = value;
    var y = Math.floor(x/256);
    var solution = x - (y * 256);

    return "Checksum: " + solution;
};

console.log(checkSum(insertNumberHere));
