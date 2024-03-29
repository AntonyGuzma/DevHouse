const {Router} = require('express')
const SessioController = require('./controller/SessionController')
const routes = Router()

routes.post('/sessions', SessioController.store)



module.exports = routes
