
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));


let resultado = 0;


resultado = numero1 + numero2;
console.log(`A soma de ${numero1} e ${numero2} é: ${resultado}`);


resultado -= numero2; 
console.log(`A subtração de ${resultado + numero2} por ${numero2} é: ${resultado}`);


resultado = numero1 * numero2;
console.log(`A multiplicação de ${numero1} por ${numero2} é: ${resultado}`);


resultado /= numero1; 
console.log(`A divisão do resultado por ${numero1} é: ${resultado}`);


resultado = numero1 % numero2;
console.log(`O resto da divisão de ${numero1} por ${numero2} é: ${resultado}`);
