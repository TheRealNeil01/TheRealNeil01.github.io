document.getElementById('add').onclick = function() {
    var number1 = parseFloat(document.getElementById('num1').value);
    var number2 = parseFloat(document.getElementById('num2').value);
    var final = number1 + number2;
    document.getElementById('output').innerHTML = final;
}
document.getElementById('subtract').onclick = function() {
    var number1 = parseFloat(document.getElementById('num1').value);
    var number2 = parseFloat(document.getElementById('num2').value);
    var final = number1 - number2;
    document.getElementById('output').innerHTML = final;
}
document.getElementById('multiply').onclick = function() {
    var number1 = parseFloat(document.getElementById('num1').value);
    var number2 = parseFloat(document.getElementById('num2').value);
    var final = number1 * number2;
    document.getElementById('output').innerHTML = final;
}
document.getElementById('divide').onclick = function() {
    var number1 = parseFloat(document.getElementById('num1').value);
    var number2 = parseFloat(document.getElementById('num2').value);
    var final = number1 / number2;
    document.getElementById('output').innerHTML = final;
}
document.getElementById('carrot').onclick = function() {
    var number1 = parseFloat(document.getElementById('num1').value);
    var number2 = parseFloat(document.getElementById('num2').value);
    var final = Math.pow(number1, number2);
    document.getElementById('output').innerHTML = final;
}
document.getElementById('factorial').onclick = function() {
    var number1 = parseFloat(document.getElementById('num1').value);
    function factorial(number1) {
        if (number1 == 0 || number1 == 1) {
            return 1;
        }
        else if (number1 > 1) {
            return factorial(number1 - 1) * number1;
        }
    }
    var final = factorial(number1);
    document.getElementById('output').innerHTML = final;
}
document.getElementById('clear').onclick = function() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('output').innerHTML = ""
}