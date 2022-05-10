
// Exercicio 1

function convertPolegadas ( valor ) {
    return valor * 2.54;
};

console.log ("o valor em centimetros é de " + convertPolegadas (10));


// Exercicio 2

function convertURL ( texto ) {
    return ("http://www." + texto + ".com.br");
};

console.log (convertURL ("funcaojs"));


// Exercicio 3

function addExclama ( texto ) {
    return (texto + "!");
};

console.log (addExclama ("CUIDADO"));


// Exercicio 4

function idadeDog ( idade ) {
    return idade * 7;
};

console.log (idadeDog (12));


// Exercicio 5

function valorHora ( salario ) {
    return ("R$" + salario / 160);
};

console.log (valorHora (30000));


// Exercicio 6

function imc ( peso , altura ) {
    return peso / (altura * altura);
};

console.log (imc (89 , 1.82));


// Exercicio 7

let frase = "minha vida é show";

function caixaAlta ( texto ) {
    return texto.toUpperCase();
};

console.log (caixaAlta (frase));


// Exercicio 8

function tipoOperator ( valor ) {
    return typeof valor;
};

console.log (tipoOperator (true));


// Exercicio 9

function calcCircun ( raio ) {
    return 2 * Math.PI * raio;
};

console.log (calcCircun (3));