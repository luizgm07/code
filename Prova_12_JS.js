document.addEventListener('DOMContentLoaded', function() {
    const noteForm = document.getElementById('noteForm');
    const noteTitleInput = document.getElementById('noteTitle');
    const notesList = document.getElementById('notesList');

    loadNotes();

    noteForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = noteTitleInput.value.trim();
        if (title) {
            addNote(title);
            noteTitleInput.value = '';
        } else {
            alert('Por favor, insira um título para a nota.');
        }
    });

    function addNote(title) {
        const notes = getNotesFromStorage();
        if (notes.some(note => note.title === title)) {
            alert('Já existe uma nota com esse título.');
            return;
        }

        const newNote = { title };
        notes.push(newNote);
        saveNotesToStorage(notes);
        appendNoteToList(newNote);
    }

    function loadNotes() {
        const notes = getNotesFromStorage();
        notes.forEach(note => appendNoteToList(note));
    }

    function appendNoteToList(note) {
        const li = document.createElement('li');
        li.textContent = note.title;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'removeButton';
        removeButton.addEventListener('click', function() {
            removeNote(note.title);
            li.remove();
        });

        li.appendChild(removeButton);
        notesList.appendChild(li);
    }

    function removeNote(title) {
        const notes = getNotesFromStorage();
        const updatedNotes = notes.filter(note => note.title !== title);
        saveNotesToStorage(updatedNotes);
    }

    function getNotesFromStorage() {
        const notesJSON = localStorage.getItem('notes');
        return notesJSON ? JSON.parse(notesJSON) : [];
    }

    function saveNotesToStorage(notes) {
        localStorage.setItem('notes', JSON.stringify(notes));
    }
});