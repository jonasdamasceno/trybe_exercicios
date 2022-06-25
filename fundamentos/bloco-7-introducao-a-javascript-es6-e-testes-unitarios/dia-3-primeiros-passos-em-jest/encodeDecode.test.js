const { encode, decode} = require('./encodeDecode');

describe('testa as condições das funções encode e decode', () => {
  it('testa se encode é defida', () =>{
    expect(encode).toBeDefined();
  });
  it('testa se encode é uma função', () => {
    expect(typeof encode).toEqual('function')
  });
  it('testa se decode é uma função', () => {
    expect(typeof decode).toEqual('function')
  });
  it('testa a troca de a por 1', () => {
    expect(encode('banana')).toEqual('b1n1n1')
  });
  it('testa a troca de e por 2', () => {
    expect(encode('beber')).toEqual('b2b2r')
  });
  it('testa a troca de i por 3', () => {
    expect(encode('fizz')).toEqual('f3zz')
  });
  it('testa a troca de o por 4', () => {
    expect(encode('ovo')).toEqual('4v4')
  });
  it('testa a troca de u por 5', () => {
    expect(encode('urubu')).toEqual('5r5b5')
  });
  it('testa o tamanho da string',() => {
    expect(encode('dafruta').length).toEqual(7)
  });
});