//O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24

  let Fatorial = 10;
    let resultado = 1;
    for(let index = Fatorial; index > 1; index -= 1){
      resultado *= index;
    }
    console.log(resultado);

    // Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
     let palavra = "banana";
     let retornoAnagrama = palavra.split('').reverse('').join('');
      console.log(retornoAnagrama);
    
