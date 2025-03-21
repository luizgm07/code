document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const userList = document.getElementById('userList');
    const resetButton = document.getElementById('resetButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const birthdate = document.getElementById('birthdate').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!username || !password || !phone || !birthdate || !email) {
            console.error('Todos os campos devem ser preenchidos.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Nome de Usuário:</strong> ${username}<br>
            <strong>Senha:</strong> ${password}<br>
            <strong>Telefone:</strong> ${phone}<br>
            <strong>Data de Nascimento:</strong> ${birthdate}<br>
            <strong>E-mail:</strong> ${email}
        `;

        userList.appendChild(listItem);

        form.reset();
    });

    resetButton.addEventListener('click', function() {
        userList.innerHTML = '';
    });
});