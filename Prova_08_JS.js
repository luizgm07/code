class Livro {
    constructor(titulo, autor, ano) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;
    }
  
    exibirInformacoes() {
      return `Titulo: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`;
    }
  }
  
  const biblioteca = [];
  
  function adicionarLivro(titulo, autor, ano) {
    const novoLivro = new Livro(titulo, autor, ano);
    biblioteca.push(novoLivro);
    console.log('Livro adicionado com sucesso!');
  }
  
  function buscarLivro(titulo) {
    const livroEncontrado = biblioteca.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    if (livroEncontrado) {
      console.log(livroEncontrado.exibirInformacoes());
    } else {
      console.log('Livro não encontrado.');
    }
  }
  
  function listarLivros() {
    if (biblioteca.length === 0) {
      console.log('A biblioteca está vazia.');
    } else {
      for (const livro of biblioteca) {
        console.log(livro.exibirInformacoes());
      }
    }
  }
  
  function calcularMediaIdade() {
    if (biblioteca.length === 0) {
      console.log('Nenhum livro na biblioteca para calcular a média.');
      return;
    }
    const anoAtual = new Date().getFullYear();
    const somaIdade = biblioteca.reduce((acc, livro) => acc + (anoAtual - livro.ano), 0);
    const media = somaIdade / biblioteca.length;
    console.log(`A média de idade dos livros é ${media.toFixed(2)} anos.`);
  }
  
  adicionarLivro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954);
  adicionarLivro('1984', 'George Orwell', 1949);
  adicionarLivro('O Hobbit', 'J.R.R. Tolkien', 1937);
  
  listarLivros();
  buscarLivro('1984');
  calcularMediaIdade();
  