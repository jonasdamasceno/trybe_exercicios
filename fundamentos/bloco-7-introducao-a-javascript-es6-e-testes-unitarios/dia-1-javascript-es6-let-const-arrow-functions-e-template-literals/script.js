// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.
// const testingScope = escopo => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   const sortArrayBonus = (array) => {
//     const sortOddsAndEvens = array.sort((a, b) => a - b);
//     return sortOddsAndEvens;
//   };
//   const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
//   console.log(`os numeros ${oddsAndEvens} se encontram ordenados em forma crescente!`); // será necessário alterar essa linha 😉

  //parte II
  // Crie uma função que receba um número e retorne seu fatorial.

//   function returnFatorial(num1) {
//     let soma = 1
//     if (Number.isInteger(num1) === true){
//       while(num1 > 0){
//         soma = soma*num1
//         console.log(num1);
//         num1 -= 1;
//       }
//       return soma;
//     }
//     else {
//         return 0; 
//     }
//   }
// console.log(returnFatorial(5));

const fatorial = num2 => {
  return (num2 === 1 || num2 === 0) ? 1 : num2 * fatorial(num2 - 1)
}
console.log(fatorial(5));