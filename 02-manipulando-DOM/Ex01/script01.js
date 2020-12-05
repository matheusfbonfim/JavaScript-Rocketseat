// Contador para o indice de cada id dos quadrados
let contador = 0;

// Função cria e adiciona um elemento quadrado
function criaQuadrado(){
// Cria uma div referente ao novo quadrado
  let element = document.createElement('div');
  // Atribui o id do quadrado 
  element.setAttribute('id', `quadrado${contador}`);
  contador = contador + 1;
      
  // Estilo do quadrado
  element.style.width = '100px';
  element.style.height = '100px';
  element.style.backgroundColor = '#f00';
  element.style.float = 'left';

  // Adiciona ao container/blocos de quadrados
  let container = document.querySelector('#quadrados');
  container.appendChild(element);
}

// Seleciona o botão de adicionar 
let button = document.querySelector('#button');

// Atribui a função ao clicar no botao
button.onclick = criaQuadrado;