import express from 'express'
import apiController from './apiController.js'

const app = express()
const port = 3000

app.get("/cep/:id", apiController.endereco)
app.listen(port, () => console.log(`Rodando na porta ${port}!`))