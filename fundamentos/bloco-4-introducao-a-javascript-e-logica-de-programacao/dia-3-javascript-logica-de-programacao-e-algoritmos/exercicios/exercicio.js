//O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24

  let Fatorial = 10;
    let resultado = 1;
    for(let index = Fatorial; index > 1; index -= 1){
      resultado *= index;
    }
    console.log(resultado);
