const express = require('express')
const cors = require('cors')

const api = express()

api.use(express.json())
api.use(cors())

api.use('/api', require('../routes/routes'))

api.listen(3001)
