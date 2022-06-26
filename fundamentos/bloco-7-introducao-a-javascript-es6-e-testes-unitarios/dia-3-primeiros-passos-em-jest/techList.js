const techList = (tech, nome) => {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  const technology = tech.sort();
  const listTech = [];
  for(let index = 0; index < technology.length; index += 1) {
    listTech.push ({
      tech: technology[index],
      nome: nome,
    });
    return listTech;
  }
};


module.exports = techList;