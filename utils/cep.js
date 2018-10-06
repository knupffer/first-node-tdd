module.exports = {
  isValid: function(cep) {
    if (!cep) return false

    let cleanCep = cep.replace(/[^0-9]+/g, '')

    if (cleanCep.length !== 8) return false

    return true
  }
}
