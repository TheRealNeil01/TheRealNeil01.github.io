document.getElementById('add').onclick = function() {
    var value1 = parseFloat($('#input-box').val());
    var sum = value1 + 5;
    document.getElementById('output').innerHTML = sum;
    document.getElementById('input-box').value += "+";
};