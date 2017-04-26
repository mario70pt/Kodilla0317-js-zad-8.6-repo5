// chyba "zarybiło"!!!!
var a = prompt('podaj wartosc a', '');
var b = prompt('podaj wartosc b', '');
var userData = (a * a) + (2 * a * b) - (b * b);
alert('value ' + userData);
console.log('value o wartosci a: ' + a + ' i wartosci b: ' + b + ' wynosi: ' + userData);
if (userData > '0') {
    alert('dodatni');
} else if (userData < '0') {
    alert('ujemny');
} else {
    alert('równy "0"');
}

