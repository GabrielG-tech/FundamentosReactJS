// var num;
// num = 5;
// console.log(num, typeof(num));

// num = "5";
// console.log(num, typeof(num));

// console.log(5+3);
// console.log("5"+"3");
// console.log("cinco"+"3");

// let pessoa = {
//     primeiroNome: 'Vanessa',
//     utimoNome: 'Frattini'
// };

// console.log(pessoa.primeiroNome); // notação de ponto
// console.log(pessoa['primeiroNome']); // notação de array



// let meuCarro = new Object();
// meuCarro['fabricacao'] = "Toyota";
// meuCarro['ano'] = 2003;
// meuCarro['modelo'] = "HB20";

// console.log(meuCarro.ano);

// // == valor --> !=
// // === valor e tipo (estritamente igual) --> !== (estritamente diferente)

// function listaPropriedades(o) {
//     var objetoInspecionado;
//     var resultado = [];
//     // for ([inicialização/de]; [condição]/se; [expressão final/até]) {declaração}
//     for (objetoInspecionado = o; objetoInspecionado !== null; objetoInspecionado = Object.getPrototypeOf(objetoInspecionado)) {
//             resultado = resultado.concat(Object.getOwnPropertyNames(objetoInspecionado)); // .concat() --> Junta o conteúdo de duas strings
//         } // Object.getOwnPropertyNames() --> Retorna o nome das propriedades do objeto
//         return resultado;
// };

// let obj = listaPropriedades(meuCarro);
// console.log(obj)

// var carro1 = "Jeep";
// var carro2 = "Mercedes";
// var carro3 = "BMW";

// var carrosArray1 = ["Jeep", "Mercedes", "BMW"];
// console.log(carrosArray1);

// var carrosArray2 = [
//     "Jeep",
//     "Mercedes",
//     "BMW"
// ];
// console.log(carrosArray2);

// console.log(carrosArray1[0]);
// carrosArray1[0] = "Camaro";
// console.log(carrosArray1);
// carrosArray1[3] = "Gol";
// console.log(carrosArray1);

// console.log(carrosArray1.length);


// var pessoa = ["Morgan", "Freeman", 84];

// var pessoa1 = {
//     primeiroNome: "Naomi",
//     ultimoNome: "Campbell",
//     idade: 51
// };

// var pessoa2 = { primeiroNome: "Denzel",ultimoNome: "Washington",
// idade: 66 };

// let nome = pessoa2.primeiroNome
// console.log(nome);
// let tamanho = pessoa["length"];
// console.log("Tamanho: ", tamanho);

// // pessoa[pessoa.length -1]
// pessoa.length = 2;
// console.log(pessoa);

// pessoa.length = 4;
// console.log(pessoa);

// pessoa[3] = ".";
// pessoa[2] = "teste";
// console.log("\nValores das strings na array" + pessoa);
// console.log("Número de string na array: " + pessoa.length);
// console.log("Número de letras da string[2]: " + pessoa[2].length);
// console.log("Letra corespondente da string citada: " + pessoa[2][0]);


// Array multidimencional
// var a = new Array(4);
// for (i = 0; i < 4; i++) {
//     a[i] = new Array(4);
//     for (j = 0; j < 4; j++) {
//         a[i][j] = "[" + i + ", " + j+ "]"
//     }
// }
// console.log("Array multidimencional:")
// console.log(a);

// console.log("linha de código 1\n \
// linha de texto 2");

// console.log(`linha de código 2
// linha de código 2`);

// console.log('linha de código 2
// linha de código 2'); <-- Não funciona para pular linha

var a = 10;
var b = 5;
console.log("O valor de a + b é: " + (a + b) + ".");
console.log(`O valor de a + b é: ${a + b}.`); // <-- Template String
console.log("O valor de '10' + b é: " + (Number('10') + b) + ".");

