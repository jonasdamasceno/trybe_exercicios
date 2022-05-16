const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
//Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
//Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
//Implemente condicionais para que:
//Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
//Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
//Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
//Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
//Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
//Agora imprima a variável message fora das suas condições.
//Operador OR
//Você já viu um operador em que as duas condições devem ser verdadeiras para que o resultado final seja verdadeiro.
//Com o operador OR (ou ||, no JavaScript), precisamos apenas que uma das condições sejam verdadeiras: isso ou aquilo.
//Por exemplo, imagine novamente que estamos na padaria, mas nosso pedido agora vai ser diferente. Dessa vez, se não tiver um café, pode ser um suco de laranja. Como escreveríamos isso em JavaScript?
const currentHour = 1;
let message = "";

if (currentHour >= 22 ){
    message = "Não deveríamos comer nada, é hora de dormir";
} 
else if (currentHour >= 18 && currentHour <= 22){
    message = "Rango da noite, vamos jantar :D";
} 
else if (currentHour >= 14 && currentHour < 18){
  message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14){
  message = "Hora do almoço!!!"
}
else if (currentHour >= 4 && currentHour < 11){
  message =  "Hmmm, cheiro de café recém passado";
}
else {
  message ="zzzzz"
}
console.log(message);