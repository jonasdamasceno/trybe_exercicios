const myRemove = require('./myRemove.js')

describe('testa o retorno da função myRemove', () => {
  it('testa o retorno com item = 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4,], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('testa o retorno da função myRemove com o item = 5', () =>{
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});