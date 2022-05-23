let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  //Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

  for(let proprieties in leitor){
    console.log("o livro favorito de" + " " + leitor["nome"] + leitor["sobrenome"] + " " + 'se chama "' + " " + leitor["livrosFavoritos"][0]["titulo"] + '"' );
  }