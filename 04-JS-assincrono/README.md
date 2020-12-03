<h1 align="center">
    <img alt="Starter" title="Javascript Starter"src="https://github.com/matheusfbonfim/JavaScript-Rocketseat/blob/master/.github/logo.svg" width="200px" />
</h1>

<h2 align="center">
  JS Rocketseat - Exercícios e Desafios 🚀
</h2>

## Módulo 04 - JS Assíncrono :point_up:

### 01 Exercício :pencil:
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

### 02 Exercício :pencil:
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

### 03 Exercício :pencil:
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
</a>
</h3>
</h3>