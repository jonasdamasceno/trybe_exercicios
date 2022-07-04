// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, name) => acc + name.split('').reduce((acc, letter) => acc + (letter === 'a' || letter === 'A' ? 1 : 0), 0), 0);
  };
  containsA(names);
  console.log(containsA(names));