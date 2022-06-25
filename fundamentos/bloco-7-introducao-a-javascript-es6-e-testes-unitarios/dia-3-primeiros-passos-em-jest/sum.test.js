const sum = require('./sum.js');

describe('testa a funcao sum', () => {
  it('testa o retorno das somas', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  })
  it('testa o erro se lançada um string', () => {
    expect(() => sum(4, '5').toThrowError());
    expect(() => sum().toThrowError('parameters must be numbers'))
  })
});