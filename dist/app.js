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
document.getElementById('selection').onchange = function() {
    if(document.getElementById('selection').value === 'Theme 2') {
        document.getElementById('selection').classList.add('bg-grayish-red-keypad')
        document.getElementById('selection').classList.add('text-yellow-text')
        document.body.classList.add('bg-light-gray-main')
        document.getElementById('text').classList.add('bg-white')
        document.getElementById('number').classList.add('bg-grayish-red-keypad')
        document.getElementById('reset').classList.add('bg-dark-cyan-bacgkround')
        document.getElementById('reset').classList.add('border-dark-cyan-shadow')
        document.getElementById('result').classList.add('bg-orange-key-background')
        document.getElementById('result').classList.add('border-orange-key-shadow')
        document.getElementById('one').classList.add('bg-grayish-yellow-background')
        document.getElementById('one').classList.add('border-grayish-orange-shadow')
        document.getElementById('two').classList.add('bg-grayish-yellow-background')
        document.getElementById('two').classList.add('border-grayish-orange-shadow')
        document.getElementById('three').classList.add('bg-grayish-yellow-background')
        document.getElementById('three').classList.add('border-grayish-orange-shadow')
        document.getElementById('four').classList.add('bg-grayish-yellow-background')
        document.getElementById('four').classList.add('border-grayish-orange-shadow')
        document.getElementById('five').classList.add('bg-grayish-yellow-background')
        document.getElementById('five').classList.add('border-grayish-orange-shadow')
        document.getElementById('six').classList.add('bg-grayish-yellow-background')
        document.getElementById('six').classList.add('border-grayish-orange-shadow')
        document.getElementById('seven').classList.add('bg-grayish-yellow-background')
        document.getElementById('seven').classList.add('border-grayish-orange-shadow')
        document.getElementById('eight').classList.add('bg-grayish-yellow-background')
        document.getElementById('eight').classList.add('border-grayish-orange-shadow')
        document.getElementById('nine').classList.add('bg-grayish-yellow-background')
        document.getElementById('nine').classList.add('border-grayish-orange-shadow')
        document.getElementById('plus').classList.add('bg-grayish-yellow-background')
        document.getElementById('plus').classList.add('border-grayish-orange-shadow')
        document.getElementById('minus').classList.add('bg-grayish-yellow-background')
        document.getElementById('minus').classList.add('border-grayish-orange-shadow')
        document.getElementById('multi').classList.add('bg-grayish-yellow-background')
        document.getElementById('multi').classList.add('border-grayish-orange-shadow')
        document.getElementById('divide').classList.add('bg-grayish-yellow-background')
        document.getElementById('divide').classList.add('border-grayish-orange-shadow')
        document.getElementById('zero').classList.add('bg-grayish-yellow-background')
        document.getElementById('zero').classList.add('border-grayish-orange-shadow')
        document.getElementById('text').classList.add('text-yellow-text')
    }
    else{
        document.getElementById('selection').classList.remove('bg-grayish-red-keypad')
        document.getElementById('selection').classList.remove('text-yellow-text')
        document.body.classList.remove('bg-light-gray-main')
        document.getElementById('text').classList.remove('text-yellow-text')
        document.getElementById('text').classList.remove('bg-white')
        document.getElementById('number').classList.remove('bg-grayish-red-keypad')
        document.getElementById('reset').classList.remove('bg-dark-cyan-bacgkround')
        document.getElementById('reset').classList.remove('border-dark-cyan-shadow')
        document.getElementById('result').classList.remove('bg-orange-key-background')
        document.getElementById('result').classList.remove('border-orange-key-shadow')
        document.getElementById('one').classList.remove('bg-grayish-yellow-background')
        document.getElementById('one').classList.remove('border-grayish-orange-shadow')
        document.getElementById('two').classList.remove('bg-grayish-yellow-background')
        document.getElementById('two').classList.remove('border-grayish-orange-shadow')
        document.getElementById('three').classList.remove('bg-grayish-yellow-background')
        document.getElementById('three').classList.remove('border-grayish-orange-shadow')
        document.getElementById('four').classList.remove('bg-grayish-yellow-background')
        document.getElementById('four').classList.remove('border-grayish-orange-shadow')
        document.getElementById('five').classList.remove('bg-grayish-yellow-background')
        document.getElementById('five').classList.remove('border-grayish-orange-shadow')
        document.getElementById('six').classList.remove('bg-grayish-yellow-background')
        document.getElementById('six').classList.remove('border-grayish-orange-shadow')
        document.getElementById('seven').classList.remove('bg-grayish-yellow-background')
        document.getElementById('seven').classList.remove('border-grayish-orange-shadow')
        document.getElementById('eight').classList.remove('bg-grayish-yellow-background')
        document.getElementById('eight').classList.remove('border-grayish-orange-shadow')
        document.getElementById('nine').classList.remove('bg-grayish-yellow-background')
        document.getElementById('nine').classList.remove('border-grayish-orange-shadow')
        document.getElementById('plus').classList.remove('bg-grayish-yellow-background')
        document.getElementById('plus').classList.remove('border-grayish-orange-shadow')
        document.getElementById('minus').classList.remove('bg-grayish-yellow-background')
        document.getElementById('minus').classList.remove('border-grayish-orange-shadow')
        document.getElementById('multi').classList.remove('bg-grayish-yellow-background')
        document.getElementById('multi').classList.remove('border-grayish-orange-shadow')
        document.getElementById('divide').classList.remove('bg-grayish-yellow-background')
        document.getElementById('divide').classList.remove('border-grayish-orange-shadow')
        document.getElementById('zero').classList.remove('bg-grayish-yellow-background')
        document.getElementById('zero').classList.remove('border-grayish-orange-shadow')
    }
}