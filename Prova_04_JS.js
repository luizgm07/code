let listaDeCompras = [];

function adicionarItem() {
  const input = document.getElementById("itemInput");
  const item = input.value.trim();

  if (item === "") {
    alert("Por favor, insira um item.");
    return;
  }

  listaDeCompras.push(item);
  input.value = "";
  renderizarLista();
}

function removerItem(index) {
  listaDeCompras.splice(index, 1);
  renderizarLista();
}

function atualizarItem(index) {
  const novoValor = prompt("Digite o novo valor para o item:", listaDeCompras[index]);

  if (novoValor && novoValor.trim() !== "") {
    listaDeCompras[index] = novoValor.trim();
    renderizarLista();
  }
}

function renderizarLista() {
  const ul = document.getElementById("listaDeCompras");
  ul.innerHTML = "";

  listaDeCompras.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item}</span>
      <div class="actions">
        <button onclick="atualizarItem(${index})">Editar</button>
        <button onclick="removerItem(${index})">Remover</button>
      </div>
    `;
    ul.appendChild(li);
  });
}
