<h1 align="center">
    <img alt="Starter" title="Javascript Starter"src=".github/Logo_extended.jpeg" width="200px" />
</h1>

<h3 align="center">
  JS Rocketseat - Exercícios e Desafios
</h3>

<p align="center">Este projeto armazena os exercícios finais/desafios de cada módulo do curso de Javascript da Rocketseat <a href="https://skylab.rocketseat.com.br/journey/starter"> (JavaScript Starter)</a> 🎓
</p>


<p align="center">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/matheusfbonfim/JavaScript-Rocketseat?color=%2304D361">

  <a href="https://www.linkedin.com/in/matheus-bonfim-448667169/">
    <img alt="Made by " src="https://img.shields.io/badge/made%20by-matheusfbonfim-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
  
  <a>
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/matheusfbonfim/JavaScript-Rocketseat.svg">
  </a>
  
  <a href="https://github.com/matheusfbonfim/JavaScript-Rocketseat/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/matheusfbonfim/JavaScript-Rocketseat.svg">
  </a>
   <a href="https://github.com/matheusfbonfim/JavaScript-Rocketseat/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/matheusfbonfim/JavaScript-Rocketseat?style=social">
  </a>
</p>

### Módulo 01 - Introdução JavaScript :point_up:

#### 01 Exercício :pencil:

Crie uma função que dado o objeto a seguir:

```
var endereco = {
		rua: "Rua dos pinheiros",
		numero: 1293,
		bairro: "Centro",
		cidade: "São Paulo",
		uf: "SP"
};
```

Retorne o seguinte conteúdo:

`O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.`

#### 02 Exercício :pencil:

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```
function pares(x, y) {
// código aqui
}
pares(32, 321);
```

#### 03 Exercício :pencil:

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

```
function temHabilidade(skills) {
// código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
```
_Dica: para verificar se um vetor contém um valor, utilize o método indexOf._

#### 04 Exercício :pencil:

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```
function experiencia(anos) {
// código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

#### 05 Exercício :pencil:

Dado o seguinte vetor de objetos:

```
var usuarios = [
{
nome: "Diego",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
nome: "Gabriel",
habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}
];
```

Escreva uma função que produza o seguinte resultado:

`O Diego possui as habilidades: Javascript, ReactJS, Redux 
 O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir`

_Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join._

### Módulo 02 - Manipulando a DOM :point_up:

#### 01 Exercício :pencil:

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

#### 02 Exercício :pencil:

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

#### 03 Exercício :pencil:

A partir do seguinte vetor:

```
var nomes = ["Diego", "Gabriel", "Lucas"];
```

Preencha uma lista ```<ul>``` no HTML com os itens da seguinte forma:

● Diego
● Gabriel
● Lucas

#### 04 Exercício :pencil:

Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

```
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
```

Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

### Módulo 03 - App de ToDos :point_up:

Criado aplicativo Todo List no qual armazena os dados na localStorage. Cria e exclui itens na lista de Todo's.

### Módulo 04 - JS Assíncrono :point_up:

#### 01 Exercício :pencil:
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no `.then,` caso contrário, no `.catch`

```
function checaIdade(idade) {
 // Retornar uma promise
}
checaIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });

```

#### 02 Exercício :pencil:
Crie uma tela com um
`<input>` que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.

```
<input type="text" name="user">
<button onclick="">Adicionar</button>
```

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

```
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>
```

#### 03 Exercício :pencil:
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:

```
<li>Carregando...</li>
```

Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.

## :memo: License

O projeto está sobre a licença [MIT](./LICENSE) ❤️ 

Gostou? Deixe uma estrelinha para ajudar o projeto ⭐

<!-- Mensagem final -->
<h3 align="center">
Feito com ❤️ por <a href="https://www.linkedin.com/in/matheus-bonfim-448667169/">Matheus Bonfim</a>
<br><br>
<a href="https://rocketseat.com.br">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">

<a href="https://github.com/DanielObara/Javascript-Rocketseat">
  <img alt="Made by DanielObara" src="https://img.shields.io/badge/made%20by-DanielObara-%237519C1">

</a>
</h3>
</h3>