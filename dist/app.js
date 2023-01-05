var x = "";
var y = "";
var z = 0;
function value() {
    document.getElementById('zero').onclick = function() {
        x += 0
        document.getElementById('text').value = x;
    }
    document.getElementById('one').onclick = function() {
        x += 1
        document.getElementById('text').value = x;
    }
    document.getElementById('two').onclick = function() {
        x += 2
        document.getElementById('text').value = x;
    }
    document.getElementById('three').onclick = function() {
        x += 3
        document.getElementById('text').value = x;
    }
    document.getElementById('four').onclick = function() {
        x += 4
        document.getElementById('text').value = x;
    }
    document.getElementById('five').onclick = function() {
        x += 5
        document.getElementById('text').value = x;
    }
    document.getElementById('six').onclick = function() {
        x += 6
        document.getElementById('text').value = x;
    }
    document.getElementById('seven').onclick = function() {
        x += 7
        document.getElementById('text').value = x;
    }
    document.getElementById('eight').onclick = function() {
        x += 8
        document.getElementById('text').value = x;
    }
    document.getElementById('nine').onclick = function() {
        x += 9
        document.getElementById('text').value = x;
    }
}
value();
document.getElementById('plus').onclick = function() {
    z = 1;
    y = x;
    x = "";
    document.getElementById('plus').classList.add('bg-grayish-orange')
    document.getElementById('text').value = x;
    value()
    
}
document.getElementById('minus').onclick = function() {
    z = 2;
    y = x;
    x = "";
    document.getElementById('minus').classList.add('bg-grayish-orange')
    document.getElementById('text').value = x;
    value()
    
}
document.getElementById('multi').onclick = function() {
    z = 3;
    y = x;
    x = "";
    document.getElementById('multi').classList.add('bg-grayish-orange')
    document.getElementById('text').value = x;
    value()
    
}
document.getElementById('divide').onclick = function() {
    z = 4;
    y = x;
    x = "";
    document.getElementById('divide').classList.add('bg-grayish-orange')
    document.getElementById('text').value = x;
    value()
    
}
document.getElementById('result').onclick = function() {
    if (z === 1) {
        document.getElementById('plus').classList.remove('bg-grayish-orange')
        document.getElementById('result').classList.add('bg-desaturated-blue-shadow')
        document.getElementById('text').value = Number.parseInt(x) + Number.parseInt(y)
    }
    else if( z === 2) {
        document.getElementById('minus').classList.remove('bg-grayish-orange')
        document.getElementById('result').classList.add('bg-desaturated-blue-shadow')
        document.getElementById('text').value = Number.parseInt(y) - Number.parseInt(x)
    }
    else if( z === 3) {
        document.getElementById('multi').classList.remove('bg-grayish-orange')
        document.getElementById('result').classList.add('bg-desaturated-blue-shadow')
        document.getElementById('text').value = Number.parseInt(y) * Number.parseInt(x)
    }
    else if( z === 4) {
        document.getElementById('divide').classList.remove('bg-grayish-orange')
        document.getElementById('result').classList.add('bg-desaturated-blue-shadow')
        document.getElementById('text').value = Number.parseInt(y) / Number.parseInt(x)
    }
}
document.getElementById('reset').onclick = function() {
    x = "";
    y = "";
    document.getElementById('text').value = "";
}