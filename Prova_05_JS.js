let tarefas = [];


const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


function addTask() {
  const novaTarefa = taskInput.value.trim();

  if (novaTarefa === '') {
    alert("Por favor, digite uma tarefa.");
    return;
  }

  
  tarefas.push({ texto: novaTarefa, concluida: false });
  taskInput.value = '';

  renderTasks();
}


function removeTask(index) {
  tarefas.splice(index, 1);
  renderTasks();
}


function concludeTask(index) {
  tarefas[index].concluida = true;
  renderTasks();
}


function renderTasks() {
  taskList.innerHTML = '';

  
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');

    
    const span = document.createElement('span');
    span.className = 'taskText';
    if (tarefa.concluida) {
      span.classList.add('concluded');
      span.innerText = '✅ ' + tarefa.texto;
    } else {
      span.innerText = tarefa.texto;
    }
    li.appendChild(span);

    
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    
    if (!tarefa.concluida) {
      const concludeBtn = document.createElement('button');
      concludeBtn.innerText = 'Concluir';
      concludeBtn.onclick = function() {
        concludeTask(index);
      };
      actionsDiv.appendChild(concludeBtn);
    }

    
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remover';
    removeBtn.classList.add('remove');
    removeBtn.onclick = function() {
      removeTask(index);
    };
    actionsDiv.appendChild(removeBtn);

    li.appendChild(actionsDiv);
    taskList.appendChild(li);
  });
}


addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
