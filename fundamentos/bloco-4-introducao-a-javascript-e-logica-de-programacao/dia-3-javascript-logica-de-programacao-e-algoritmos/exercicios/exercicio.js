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

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
    
let array = ['java', 'javascript', 'python', 'html', 'css'];

let bigger = "";
array.split(' ').array.forEach(word => {
  if(word.trim().length > bigger.length){
    bigger = word.trim();
  }
});

let n = 5;
let aux = "";
for (let linha = 1; linha <= n; linha += 1) {
  for (let coluna = 1; coluna <= n; coluna += 1) {
    if(coluna === linha)
    aux += "*";
  }
  console.log(aux);
}
