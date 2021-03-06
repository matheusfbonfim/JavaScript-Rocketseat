// Botão (adicionar quadrado)
var buttonElement = document.querySelector('#button');
// Seleciona a div de quadrados
var squaresElements = document.querySelector('#squares');

// Estilo (Espaçamento)
squaresElements.style.marginBottom = "350px";

// Ação ao ser clicado
buttonElement.onclick = function() {
  // Cria uma div quadrado
  var elementSquare = document.createElement('div');

  // Estilo do quadrado
  elementSquare.style.width = '100px';
  elementSquare.style.height = '100px';
  elementSquare.style.backgroundColor = '#f00';
  elementSquare.style.float = 'left';
  elementSquare.style.marginBottom = '10px';
  elementSquare.style.marginLeft = '10px';

  // Ao passar o mouse terá a função de mudança de cor
  elementSquare.onmouseover = function() {
    elementSquare.style.backgroundColor = getRandomColor();
  };
  
  // Adiciona a div
  squaresElements.appendChild(elementSquare);
};

// Cor aleatória gerada pela função
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Nomes determinados
var nomes = ["Diego", "Gabriel", "Lucas"];

// Seleciona a lista do HTML
let lista = document.querySelector("#itens");

// Para cada elemento do vetor, adicionar a lista;
nomes.forEach(element => {
  // Novo item na lista
  let newElement = document.createElement("li");
  // Texto do elemento (Nome)
  let textElement = document.createTextNode(element);
  // Inserindo texto
  newElement.appendChild(textElement);
  
  // Adicionando a lista
  lista.appendChild(newElement);
});