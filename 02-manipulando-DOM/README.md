<h1 align="center">
    <img alt="Starter" title="Javascript Starter"src="https://github.com/matheusfbonfim/JavaScript-Rocketseat/blob/master/.github/logo.svg" width="200px" />
</h1>

<h2 align="center">
  JS Rocketseat - Exercícios e Desafios 🚀
</h2>

## Módulo 02 - Manipulando a DOM :point_up:

### 01 Exercício :pencil:

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

### 02 Exercício :pencil:

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
```

### 03 Exercício :pencil:

A partir do seguinte vetor:

```
var nomes = ["Diego", "Gabriel", "Lucas"];
```

Preencha uma lista ```<ul>``` no HTML com os itens da seguinte forma:

● Diego
● Gabriel
● Lucas

### 04 Exercício :pencil:

Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

```
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
```

Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

## :memo: License

O projeto está sobre a licença [MIT](./LICENSE) ❤️ 

Gostou? Deixe uma estrelinha para ajudar o projeto ⭐

<!-- Mensagem final -->
<h3 align="center">
Feito com ❤️ por <a href="https://www.linkedin.com/in/matheusfbonfim/">Matheus Bonfim</a>
<br><br>
<a href="https://rocketseat.com.br">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
</a>
</h3>
</h3>
