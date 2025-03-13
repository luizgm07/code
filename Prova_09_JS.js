class Produto {
    constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
    }
  
    exibirDetalhes() {
      return `Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}`;
    }
  }
  
  const produtos = [];
  
  function adicionarProduto(nome, preco, categoria) {
    const novoProduto = new Produto(nome, preco, categoria);
    produtos.push(novoProduto);
    console.log('Produto adicionado com sucesso!');
  }
  
  function listarProdutos() {
    produtos.forEach(produto => console.log(produto.exibirDetalhes()));
  }
  
  function buscarProduto(nome) {
    const produtoEncontrado = produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());
    if (produtoEncontrado) {
      console.log(produtoEncontrado.exibirDetalhes());
    } else {
      console.log('Produto não encontrado.');
    }
  }
  
  function filtrarPorCategoria(categoria) {
    const produtosFiltrados = produtos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase());
    produtosFiltrados.forEach(produto => console.log(produto.exibirDetalhes()));
  }
  
  function calcularTotalPrecos() {
    const total = produtos.reduce((acc, produto) => acc + produto.preco, 0);
    console.log(`Soma total dos preços: R$${total.toFixed(2)}`);
  }
  
  adicionarProduto('Notebook', 3500, 'Eletrônicos');
  adicionarProduto('Mouse', 150, 'Periféricos');
  adicionarProduto('Teclado', 200, 'Periféricos');
  
  listarProdutos();
  buscarProduto('Mouse');
  filtrarPorCategoria('Periféricos');
  calcularTotalPrecos();
  