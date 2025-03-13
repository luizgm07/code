
let dados = [];


while (true) {
    let entrada = prompt("Insira um nome (ou digite 'sair' para finalizar):");
    
    if (entrada.toLowerCase() === "sair") {
        break;
    }
    
    dados.push(entrada);
}


console.log("Lista de dados com índices:");
for (let i = 0; i < dados.length; i++) {
    console.log(`${i + 1}: ${dados[i]}`);
}


console.log("Mensagens personalizadas:");
for (let nome of dados) {
    console.log(`Bem-vindo(a), ${nome}!`);
}
