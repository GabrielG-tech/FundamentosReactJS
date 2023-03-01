// function quadrado(numero) {
//     return numero * numero;
// }

// let resultado = quadrado(8);
// console.log("O resultado é:", resultado);

// function marcaCarro(objeto) {
//     objeto.marca = "Toyota";
// }
// ======================================================
// var carro = {
//     marca: "Ford",
//     modelo: "Ka",
//     ano: 1998
// };

// var marca1, marca2;

// marca1 = carro.marca;
// console.log(marca1);

// marcaCarro(carro);
// marca2 = carro.marca;
// console.log(marca2);

// console.log(carro);
// ======================================================
// Variaveis definidas no escopo global
// var num1 = 30,
//     num2 = 5,
//     nome = "Maria";

// function multiplica() {
//     return num1 * num2;
// }

// multiplica();

// function pontuacao() {
//     var num1 = 2,
//         num2 = 3;

//     function somar() {
//         return nome + " pontuou " + (num1 + num2);
//     }
//     return somar();
// }

// var result = pontuacao()
// console.log(result);

// console.log(pontuacao());

// function calcular() {
//     console.log(2 + 2);
//     console.log("2 + 2");
// }
// calcular();

// function calcular(op1, op2){
//    console.log(op1 + op2);
// }
// calcular(350, 600); // 950


// Parâmetro arguments:
// function média() {
//     let total = 0;
//     for (i in arguments) {
//         total += arguments[i]
//     }
//     return total / arguments.length;
// }

// console.log("Média: " + média(10, 10, 5, 5, 10))
// ===================================================
// Outras maneiras de declara uma função:
const nativos = function(primeiroNome) {
    return `${primeiroNome} do Brasil`;
}
console.log(nativos("Jorge"));
console.log(nativos("Luiz"));
nativos();

// equivalente em Arrow function

const nativos2 = (primeiroNome) => {
    return `${primeiroNome} do Brasil`;
}
console.log(nativos2("Ruan"));

const nativos3 = primeiroNome => `${primeiroNome} do Brasil`;
console.log(nativos3("Marcos"));
// ===================================================
