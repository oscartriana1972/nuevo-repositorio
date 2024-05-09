/*var mensaje = 'Este es un mensaje de prueba'
console.log(mensaje);

var telefono = '3148619569 este es mi numero de telefono' 
console.log(telefono);

var resultado = 4 + 4;
console.log(resultado);

var resultado1 = 12 - 8;
console.log(resultado1);

var resultado2 = 12 * 5;
console.log(resultado2);

var resultado3 = 12 / 4;
console.log(resultado3);

var incremento = 8 ;
var resultado = incremento++
console.log(resultado);

var decremento = 9 ;
var resultado = decremento--;
console.log(resultado);
*/
//function
function sumar(num1, num2){
    let resultado = num1 + num2
    return resultado
}
var suma2 = sumar(2, 4)
console.log(suma2);
console.log(sumar(2, 7));

//if condicional
/*var edad = prompt('Cual es tu edad?')
edad = parseInt(edad)
if(edad >= 18){
    console.log('eres mayor de edad');

} else {
    console.log('Eres menor de edad');
}
*/


//parseInt()
var cadena = '1234'
var numero =  parseInt(cadena)
console.log(numero);

//parseFloat()

var cadena = '3.1416'
var decimal = parseFloat(cadena)
console.log(decimal);
//String()

var numero = 1234
var cadena = String(numero)
console.log(typeof(cadena));


//object podemos almacenar datos y funciones relacionadas a ese objeto
// los dos puntos solo se usan en objetos
var coche = {
    marca: 'Mazda',
    modelo: 'CX30',
    color: 'rojo',
    arrancar: function() {
        return 'el coche esta arrancando'
    },
    detener: function() {
        return 'el coche se esta deteniendo'
    },
}
console.log('su coche es un modelo:' + coche.modelo);
console.log('su coche es:'+ coche.marca);

//operadores de comparacion

console.log('comparacion e igualdad');
console.log(5 === '5');
console.log(5 == '5');
console.log(5 == 10);
//comparador de desigualdad

console.log(5 != '5');
console.log(5 != 10);
console.log(5 !== 5);
console.log(5>4);
console.log(5<7);
console.log(5>=4);
console.log(5<=7);

















































