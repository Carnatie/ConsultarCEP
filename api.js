import axios from 'axios'

class Api {
    static async getAddress(id) {
        try {
            const response = new Address(await (await axios.get(`https://viacep.com.br/ws/${id}/json/`)).data)
            return response
        } catch (error) {
            console.log(error)
        }
    }
}

class Address {
    constructor({
        logradouro,
        bairro,
        localidade
    }) {
        this.logradouro = logradouro
        this.bairro = bairro
        this.localidade = localidade
    }
}

export default Api