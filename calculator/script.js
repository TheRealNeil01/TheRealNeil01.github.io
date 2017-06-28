document.getElementById('clear').onclick = function() {
    document.getElementById('input-box').value = "";
}
document.getElementById('delete').onclick = function() {
    var equation = document.getElementById('input-box').value;
    var arrEquation = equation.split('');
    arrEquation[arrEquation.length - 1] = '';
    equation = arrEquation.join('');
    document.getElementById('input-box').value = equation;
}
document.getElementById('one').onclick = function() {
    document.getElementById('input-box').value += '1';
}
document.getElementById('two').onclick = function() {
    document.getElementById('input-box').value += '2';
}
document.getElementById('three').onclick = function() {
    document.getElementById('input-box').value += '3';
}
document.getElementById('four').onclick = function() {
    document.getElementById('input-box').value += '4';
}
document.getElementById('five').onclick = function() {
    document.getElementById('input-box').value += '5';
}
document.getElementById('six').onclick = function() {
    document.getElementById('input-box').value += '6';
}
document.getElementById('seven').onclick = function() {
    document.getElementById('input-box').value += '7';
}
document.getElementById('eight').onclick = function() {
    document.getElementById('input-box').value += '8';
}
document.getElementById('nine').onclick = function() {
    document.getElementById('input-box').value += '9';
}
document.getElementById('zero').onclick = function() {
    document.getElementById('input-box').value += '0';
}
document.getElementById('carrot').onclick = function() {
    document.getElementById('input-box').value += '^';
}
document.getElementById('divide').onclick = function() {
    document.getElementById('input-box').value += '/';
}
document.getElementById('multiply').onclick = function() {
    document.getElementById('input-box').value += '*';
}
document.getElementById('subtract').onclick = function() {
    document.getElementById('input-box').value += '-';
}
document.getElementById('add').onclick = function() {
    document.getElementById('input-box').value += '+';
}
document.getElementById('equals').onclick = function() {
    var final = 0;
    var equation = document.getElementById('input-box').value;
    var arrEquation = equation.split('');
    for (var i = 0; i < arrEquation.length; i++) {
        switch (arrEquation[i]) {
            case '+':
                equation = arrEquation.join('');
                final = (parseFloat(equation.substring(0, i)) + (parseFloat(equation.substring(i+1, equation.length))))
                i = arrEquation.length;
                break;
            case '^':
                equation = arrEquation.join('');
                final = Math.pow((parseFloat(equation.substring(0, i))), (parseFloat(equation.substring(i+1, equation.length))))
                i = arrEquation.length;
                break;
            case '/':
                equation = arrEquation.join('');
                final = (parseFloat(equation.substring(0, i)) / (parseFloat(equation.substring(i+1, equation.length))))
                i = arrEquation.length;
                break;
            case '*':
                equation = arrEquation.join('');
                final = (parseFloat(equation.substring(0, i)) * (parseFloat(equation.substring(i+1, equation.length))))
                i = arrEquation.length;
                break;
            case '-':
                equation = arrEquation.join('');
                final = (parseFloat(equation.substring(0, i)) - (parseFloat(equation.substring(i+1, equation.length))))
                i = arrEquation.length;
                break;
        }
    }
    document.getElementById('input-box').value = final;
}