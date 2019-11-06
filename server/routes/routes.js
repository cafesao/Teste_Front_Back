const express = require('express')
const MatController = require('../controller/MatController')
const routes = express.Router()

routes.post('', MatController.calcular)

module.exports = routes