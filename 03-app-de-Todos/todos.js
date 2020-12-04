// Selecionando as tags necessárias
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let btnElement = document.querySelector("#app button");

// Array de toDo
// Se estiver vazio o localStorage, retorna vazio
// LocalStorage é como se fosse um banco de informações
let todo = JSON.parse(localStorage.getItem("list_todos")) || [] ;

// Função - Renderizar todos os toDos
function renderTodos(){
  // Antes de tudo, limpar todos toDos, e criar a nova lista com elementos atualizados
  listElement.innerHTML = '';

  todo.forEach((e)=>{
    // Cria um atributo li
    const todoElement = document.createElement('li');
    // Cada item do array é um novo toDo (Criando o texto)
    const todoText = document.createTextNode(e);
    
    // Tag para excluir em cada toDo
    const linkElement = document.createElement('a');
    // Inserindo o link na tag excluir
    linkElement.setAttribute('href', '#');

    // Acha a posição de cada elemento do array
    var pos = todo.indexOf(e);
    // Coloca como uma funcionalidade no botão de excluir,
    // a função deleteTodo no onclick.
    linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

    const linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);

    // Adicionar o texto ao li criado
    todoElement.appendChild(todoText);
    // Adicionando a cada toDo um excluir
    todoElement.appendChild(linkElement);

    // Adicionar o elemento li ao ul
    listElement.appendChild(todoElement);
  });
}

renderTodos();

// Função para adicionar toDo a lista
function addTodo(){
  // Valor que está digitado no input
  const todoText = inputElement.value;
  
  // Adiciona o todoText no array
  todo.push(todoText);

  // Apagar texto atual do input
  inputElement.value="";

  // Renderizar novamente, após a atualização
  renderTodos();

  // Manter armazenado os toDo's atual
  saveToStorage();
}

// Chamar função no clique do botão 
btnElement.onclick = addTodo;

// Função para remover toDo
function deleteTodo(pos){
  todo.splice(pos, 1);
  renderTodos();

  // Manter armazenado os toDo's atual
  saveToStorage();
}

// Função para manter salvo os toDos
function saveToStorage(){
  // Chave (nome de onde será armazenado)
  // Converter de array para JSON
  localStorage.setItem("list_todos", JSON.stringify(todo));
}