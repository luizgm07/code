document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.className = 'removeButton';
            removeButton.addEventListener('click', function() {
                taskList.removeChild(li);
            });

            li.addEventListener('click', function() {
                li.classList.toggle('concluida');
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = '';
        } else {
            alert('Por favor, insira uma tarefa válida.');
        }
    });

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});