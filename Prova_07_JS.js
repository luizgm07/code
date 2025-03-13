let nomes = [];

function exibirMenu() {
  return prompt(
    "Escolha uma operação:\n" +
    "1 - Adicionar Nome\n" +
    "2 - Filtrar Nomes por Letra\n" +
    "3 - Buscar um Nome Específico\n" +
    "4 - Transformar Nomes para MAIÚSCULAS\n" +
    "5 - Verificar se todos os nomes têm mais de 3 caracteres\n" +
    "6 - Sair"
  );
}

function adicionarNome() {
  const nome = prompt("Digite o nome a ser adicionado:");
  if (nome) {
    nomes.push(nome);
    console.log("Nome adicionado com sucesso!");
    console.log("Lista Atualizada:", nomes);
  } else {
    console.log("Nenhum nome foi digitado.");
  }
}

function filtrarNomes() {
  const letra = prompt("Digite a letra que os nomes devem iniciar:");
  if (letra) {
    const filtrados = nomes.filter(nome => nome.charAt(0).toLowerCase() === letra.toLowerCase());
    console.log(`Nomes que começam com '${letra}':`, filtrados);
  } else {
    console.log("Nenhuma letra foi digitada.");
  }
}

function buscarNome() {
  const busca = prompt("Digite o nome exato a ser buscado:");
  if (busca) {
    const resultado = nomes.find(nome => nome === busca);
    if (resultado) {
      console.log(`O nome "${busca}" foi encontrado na lista.`);
    } else {
      console.log(`O nome "${busca}" não foi encontrado na lista.`);
    }
  } else {
    console.log("Nenhum nome foi informado para busca.");
  }
}

function transformarNomes() {
  const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
  console.log("Nomes em MAIÚSCULAS:", nomesMaiusculos);
}

function verificarNomes() {
  const todosMaisDeTres = nomes.every(nome => nome.length > 3);
  console.log("Todos os nomes têm mais de 3 caracteres?", todosMaisDeTres);
}

while (true) {
  let escolha = exibirMenu();

  if (escolha === null) {
    break;
  }

  switch (escolha) {
    case "1":
      adicionarNome();
      break;
    case "2":
      filtrarNomes();
      break;
    case "3":
      buscarNome();
      break;
    case "4":
      transformarNomes();
      break;
    case "5":
      verificarNomes();
      break;
    case "6":
      console.log("Encerrando o programa. Até logo!");
      escolha = null;
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção de 1 a 6.");
  }

 
  if (escolha === null) {
    break;
  }
}
