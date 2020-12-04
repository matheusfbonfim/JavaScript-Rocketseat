
    // Função que recebe dois numeros e retorna os pares desse intervalo
    function pares(x, y){
      // Vetor - Pares
      let pares = [];
      // Loop - Verifica paridade dos numeros do intervalo
      for(let i = x; i <= y ; i++){
        if (i % 2 == 0){
          pares.push(i);
          console.log(i);
        }
      }
    }

    pares(32,321);