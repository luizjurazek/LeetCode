let a = "11"
let b = "1"
var addBinary = function(a, b) {
    // Convertendo as strings em números da base decimal
    let decimalA = parseInt(a, 2)
    let decimaB = parseInt(b, 2)

    // soma dos decimais
    let sum = decimalA + decimalB;

    // Converte o resultado de volta para binario 
    let binarySum = sum.toString(2);

    return binarySum;
}; 
addBinary(a, b)