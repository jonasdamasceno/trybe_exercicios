// 2. Taxa Metabólica Basal

//Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal)
 //em seu site, vamos ajudá-la escrevendo um algoritmo.

//Ele recebe os seguintes dados:
 //- age: número maior que 0
 //- sex: M ou F
 //- weight: Em (kg) com número maior que 0
 //- height: Em (cm) com número maior que 0

//A fórmula para homens:
 //- (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5

//A fórmula para mulheres:
 //- (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

//Imprima no terminal o resultado do cálculo no formato:

//"A taxa metabólica basal é: x Kcal"

let age = 34;
let sex = "M";
let weight = 100;
let height = 165;

if (sex === "M"){
  console.log("A taxa metabólica basal é: x Kcal" + ((height * 5) + (weight * 13.8) - (age * 6.8) + 66)) 
}
else{
console.log("A taxa metabólica basal é: x Kcal" + ((height * 1.8) + (weight * 9.6) - (age * 4.7) + 655))  
}