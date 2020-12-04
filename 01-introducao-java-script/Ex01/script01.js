var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

// Exibe o texto de retorno a partir do endereço
function exibir(adress){
  return `O usuário mora em ${adress.cidade} / ${adress.uf}, no bairro ${adress.bairro} na rua "${adress.rua}" com n ${adress.numero}.`;
}

console.log(exibir(endereco));