const generatorEmployees = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('-');
  return {fullName, email: `${email}@trybe.com`};
}
const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
    return employees;
  };
  console.log(newEmployees(generatorEmployees));