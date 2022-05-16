let word = 'banana';
let palavraReversa = '';

for (let index = 0; index < word.length; index += 1) {
  palavraReversa += word[word.length - 1 - index];
}

console.log(palavraReversa);