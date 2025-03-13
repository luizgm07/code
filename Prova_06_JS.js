let tarefas = [];


const adicionarTarefa = function(tarefa) {
    tarefas.push({ nome: tarefa, concluida: false });
    console.log(`Tarefa "${tarefa}" adicionada com sucesso!`);
};


const listarTarefas = () => {
    console.log("Lista de Tarefas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa.nome} [${tarefa.concluida ? 'Concluída' : 'Pendente'}]`);
    });
};


const operarTarefas = (callback, ...args) => {
    callback(...args);
};


const removerTarefa = (index) => {
    if (index >= 0 && index < tarefas.length) {
        const tarefaRemovida = tarefas.splice(index, 1);
        console.log(`Tarefa "${tarefaRemovida[0].nome}" removida com sucesso!`);
    } else {
        console.log("Índice inválido!");
    }
};

const atualizarTarefa = (index, novaTarefa) => {
    if (index >= 0 && index < tarefas.length) {
        tarefas[index].nome = novaTarefa;
        console.log(`Tarefa atualizada para "${novaTarefa}"!`);
    } else {
        console.log("Índice inválido!");
    }
};

const concluirTarefa = (index) => {
    if (index >= 0 && index < tarefas.length) {
        tarefas[index].concluida = true;
        console.log(`Tarefa "${tarefas[index].nome}" marcada como concluída!`);
    } else {
        console.log("Índice inválido!");
    }
};


const iniciar = () => {
    while (true) {
        const acao = prompt(`O que você deseja fazer?
1 - Adicionar tarefa
2 - Listar tarefas
3 - Remover tarefa
4 - Atualizar tarefa
5 - Concluir tarefa
6 - Sair`);

        if (acao === '1') {
            const tarefa = prompt("Digite o nome da tarefa:");
            adicionarTarefa(tarefa);
        } else if (acao === '2') {
            listarTarefas();
        } else if (acao === '3') {
            const index = prompt("Digite o índice da tarefa que deseja remover:") - 1;
            operarTarefas(removerTarefa, index);
        } else if (acao === '4') {
            const index = prompt("Digite o índice da tarefa que deseja atualizar:") - 1;
            const novaTarefa = prompt("Digite o novo nome da tarefa:");
            operarTarefas(atualizarTarefa, index, novaTarefa);
        } else if (acao === '5') {
            const index = prompt("Digite o índice da tarefa que deseja concluir:") - 1;
            operarTarefas(concluirTarefa, index);
        } else if (acao === '6') {
            console.log("Saindo...");
            break;
        } else {
            console.log("Ação inválida!");
        }
    }
};

iniciar();