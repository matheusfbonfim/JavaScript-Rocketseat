// Selecionando o texto de entrada
let inputName = document.querySelector('input[name=user]');
// Selecionando o body
let containerBody = document.querySelector('body');
// Criando a lista
let newList = document.createElement('ul');
// Inserindo a lista no body
containerBody.appendChild(newList);

// Selecionando a lista
let dataList = document.querySelector('ul');

function getUserReposit(){
  // Usuário do repositorio 
  let user_repo = inputName.value;

  // Verifica se foi digitado algum user, senão retorna o erro
  if(!user_repo){
    renderError();
    alert("Preencha o campo");
  }

  // Após o aviso, renderiza a pagina novamente
  renderLoading();

  axios.get(`https://api.github.com/users/${user_repo}/repos`)
      .then(response => {
        //console.log(response);
        // Dado que foi aceitado a requisição, basta adicionar 
        // os repositorios do user requerido
        
        // response.data -> Tem todos os repositorios do user
        addList(response.data);
      })
      .catch(reject => {
        alert("Não foi possível efetuar a busca!");
        renderError(reject);
      });
};

// Função para carregar a página novamente
function renderLoading(){
  // Exclui os itens 
  dataList.innerHTML = "";

  // Enquanto a requsição não é respondida, a interface mostra
  // um texto "carregando"
  let textElement = document.createTextNode("Carregando...");
  
  // Cria o elemento loading 
  let loadingElement = document.createElement("li");

  // Adiciona o texto ao elemento
  loadingElement.appendChild(textElement);

  // Adiciona o item a lista 
  dataList.appendChild(loadingElement);
};

// Função para adicionar todos os repositorios do user buscado
const addList = function(repositorios){
  console.log(repositorios);
  // Deleta todos os elementos da lista
  dataList.innerHTML = '';

  // Por cada repositorio
  repositorios.forEach((repo) => {
    // Criando o texto com o nome do repositório
    const repoName = document.createTextNode(repo.name);
    // Criando um item 
    const repoItem = document.createElement('li');

    // Adicionando o texto no item
    repoItem.appendChild(repoName);

    // Adiciona o item a lista
    dataList.appendChild(repoItem);
  })
}

// Função para notificar o erro
function renderError(loading){
  // Deletar o conteudo da lista
  dataList.innerHTML= "";
  
  // O valor colocado no user
  let user_repo = inputName.value;

  // Se não for preenchido -> "Preencha o usuário"
  // Se for preenchido e acontecer um erro -> "Erro ao efetuar busca"
  let msgErro = !user_repo ? "Preencha o usuário" : "Erro ao efetuar busca";

  // Texto do erro
  let textElement = document.createTextNode(msgErro);
  // Elemento para falar do erro
  let errorElemento = document.createElement("li");

  // Cor do erro
  errorElemento.style.color = "#F00";
  
  // Adicionando o texto do erro
  errorElemento.appendChild(textElement);

  // Adicionando o erro para a parecer como um item
  dataList.appendChild(errorElemento);

  // Apaga o contéudo o input
  let inputText = document.querySelector('input[name=user]')
  inputText.value = "";
}
