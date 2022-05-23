
 //Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim",
  };
  console.log("bem vinda," + " " + info["personagem"]);
  //Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
  console.log(info);
  for(let key in info){
      console.log(key);
  };

  //Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

  let info2 = {
      personagem: "Tio Patinhas",
      origem: "Cristmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: "O último MacPatinhas",
      recorrente: "Sim", 
  };
  for(let key2 in info2){
    if(key2 === "recorrente" &&
    info[key2] === "sim" &&
    info2[key2] === "sim"){
      console.log("ambos recorrentes")
    } else {
  console.log(info[key] + "e" + info2[key2]);
    }
  console.log(Object.values(info) + " " + "e" + " " + Object.values(info2));
  }