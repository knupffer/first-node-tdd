const request = require('request')
const CEPUtils = require('./utils/cep')

const getAddressByCEP = cep => {
  const options = {
    url: `https://viacep.com.br/ws/${cep}/json/`,
    json: true
  }

  request(options, (error, response, body) => {
    if (error) {
      console.error('Encontramos um erro!')
      console.error(error)
      return
    }

    if (response.statusCode !== 200) {
      console.error(`O serviço retornou o erro ${response.statusCode}!`)
      return
    }

    if (body.erro) {
      console.error(`Não foi encontrado endereço para o CEP ${cep}!`)
      return
    }

    console.log('===> Endereço encontrado <===')
    console.log('Cep: ' + body.cep || '')
    console.log('Logradouro: ' + body.logradouro || '')
    console.log('bairro: ' + body.bairro || '')
    console.log('Localidade: ' + body.localidade || '')
    console.log('UF: ' + body.uf || '')
  })
}

if (process.argv.length <= 2) {
  console.error('Informe o CEP!')
  return
}

const cep = process.argv[2]
if (!CEPUtils.isValid(cep)) {
  console.error('Informe um CEP válido!')
  return
}

// eg. #>node index 01001-000
getAddressByCEP(cep)
