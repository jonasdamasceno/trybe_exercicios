const myFizzBuzz = require('./myFizzBuzz')

 describe('testa os retornos da função myFizzBuzz', () => {
  test('testa o retorno se o numero é divisivel por 3 ou 5', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    expect(myFizzBuzz(9)).toMatch('fizz');
    expect(myFizzBuzz(25)).toMatch('buzz')
  })
  test('testa a função myFizzBuzz com parametros nao correspondentes', () => {
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('3')).toBeFalsy();
  })
});