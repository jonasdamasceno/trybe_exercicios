
let competidor = {
    nome: "Marta",
    lastName: "silva",
    age: 34,
    bestInTheWorl: [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        gold: 2,
        silver: 3,
    },
}
console.log("A jogadora" + " " + competidor["nome"] + " " + competidor["lastName"] + " " + "foi eleita a melhor do mundo por 6 vezes nos anos de" + " " + competidor["bestInTheWorl"] + ".");
console.log("A jogadora possui" + " " + competidor["medals"]["gold"] + " " + "medalhas de ouro e" + " " + competidor["medals"]["silver"] + " " + "medalhas de prata");