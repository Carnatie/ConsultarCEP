import Api from "./api.js"


class ApiController {
    static async endereco(req, res) {
        const cep = req.params.id
        try {
            const cepEndereco = await Api.getAddress(cep)
            return res.status(200).json(cepEndereco)
        } catch (error) {
            return res.status(500).json(error.mensage)
        }
    }
}

export default ApiController