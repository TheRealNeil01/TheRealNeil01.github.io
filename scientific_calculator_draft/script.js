// Clear button
document.getElementById('clear').onclick = function() {
    document.getElementById('input-box').value = "";
}

// Delete button
document.getElementById('delete').onclick = function() {
    var equation = document.getElementById('input-box').value;
    var arrEquation = equation.split('');
    arrEquation[arrEquation.length - 1] = '';
    equation = arrEquation.join('');
    document.getElementById('input-box').value = equation;
}

// Number buttons
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

// Math operator buttons
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

// Equal button
document.getElementById('equals').onclick = function() {
    var final = 0;
    var equation = document.getElementById('input-box').value;
    var arrEquation = equation.split('');
    function mathOperator(type, place) {
        this.type = type;
        this.place = place;
    }
    var arrOperators = new Array();
    var count = 0;
    for (var i = 0; i < arrEquation.length; i++) {
        switch (arrEquation[i]) {
            case '+':
                arrOperators[count] = new mathOperator("addition", i);
                count += 1;
                break;
            case '^':
                arrOperators[count] = new mathOperator("power", i);
                count += 1;
                break;
            case '/':
                arrOperators[count] = new mathOperator("division", i);
                count += 1;
                break;
            case '*':
                arrOperators[count] = new mathOperator("multiplication", i);
                count += 1;
                break;
            case '-':
                arrOperators[count] = new mathOperator("subtraction", i);
                count += 1;
                break;
        }
    }
    var tempNum;
    var tempStr;
    var change;
    var check;
    count = 0;
    equation = arrEquation.join('');
    for (var i = 0; i < arrOperators.length; i++) {
        switch (arrOperators[i].type) {
            case "addition":
                // Get product of first equation and store in variable "temp"
                tempNum = (parseFloat(equation.substring(count, arrOperators[i].place)) + (parseFloat(equation.substring(arrOperators[i].place + 1, arrOperators[i + 1].place))));
                tempStr = tempNum.toString();
                alert(tempStr);
                
                // Convert string to char array and delete everything until the place of the next operator
                arrEquation = equation.split('');
                for (var j = 0; j < arrOperators[i + 1].place; j++) {
                    arrEquation[j] = '';
                }
                
                // Move remaining equation back to beginning of the array
                equation = arrEquation.join('');
                arrEquation = equation.split('');
                
                // Move remaining equation forward to the length of temp
                for (var k = arrEquation.length - 1; k >= 0; k--) {
                    change = arrEquation[k];
                    arrEquation[k] = '';
                    arrEquation[k + tempStr.length] = change;
                }
                
                // Place temp at beginning of equation and convert back to string
                for (var l = 0; l < tempStr.length; l++) {
                    arrEquation[l] = tempStr.substring(l, l + 1);
                }
                equation = arrEquation.join('');
                
                // Change places of math operators and output
                arrOperators[i + 1].place = tempStr.length;
                break;
        }
    }
    document.getElementById('input-box').value = equation;
}