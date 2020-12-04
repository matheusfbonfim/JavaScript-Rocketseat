   // Vetor de objetos (usuários)
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

    function exibir(usuarios){
      for (u of usuarios){
        let frase = ''
        frase= u.habilidades.join(','); 
        console.log(`O ${u.nome} possui as habilidades: ${frase}`);
      }    
    }
    
    exibir(usuarios);