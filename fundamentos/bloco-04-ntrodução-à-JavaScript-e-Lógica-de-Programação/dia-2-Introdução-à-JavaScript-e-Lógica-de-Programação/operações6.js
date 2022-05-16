let pecaDoXadrex = "bispo";
switch (pecaDoXadrex.toLowerCase()){
  case "rei":
    console.log("rei -> uma casa apenas, em qualquer direção");
      break;
  case "rainha":
    console.log("rainha -> diagonal, horizontal e vertical");
      break;
  case "bispo":
    console.log("bispo -> diagonal");
      break;
  case "torre":
    console.log("torre -> horizontal e vertical");
      break;
  case "cavalo":
    console.log("cavalo -> em L, pode pular peças");
      break;
  case "peao":
    console.log("peao -> primeira movimento pode andar duas casas a frente, captura peças somente na diagonal");
      break;
  default:
    console.log("Erro");
    break  
} 