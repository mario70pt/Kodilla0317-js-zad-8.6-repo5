// chyba "zarybiło"!!!!
var a = prompt('podaj wartosc a', '');
var b = prompt('podaj wartosc b', '');
var value = (a * a) + (2 * a * b) - (b * b);
console.log('działania na zmienej a: ' + a + ' i zmienej b: ' + b + ' dają wartość: ' + value);
if (value > 0) {
    console.log('wynik dodatni');
} else if (value < 0) {
    console.log('wynik ujemny');
} else {
    console.log('wynik równy "0"');
}

