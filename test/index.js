const expect = require('chai').expect
const CEPUtils = require('../utils/cep')

describe('Primeiro TDD com Node.js', function() {
  it('CEP em branco - inválido', function() {
    const cep = ''
    const result = CEPUtils.isValid(cep)
    expect(result).to.equal(false)
  })

  it('CEP com formato 00000-000 - válido', function() {
    const cep = '00000-000'
    const result = CEPUtils.isValid(cep)
    expect(result).to.equal(true)
  })

  it('CEP com formato 00000000 - válido', function() {
    const cep = '00000000'
    const result = CEPUtils.isValid(cep)
    expect(result).to.equal(true)
  })
})
