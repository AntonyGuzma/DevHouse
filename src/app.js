const express = require('express')
const routes = require('./routes')

//classe para o APP
class App{

    constructor(){
        //const server = express()
        this.server = express()

        this.middlewares()
        this.routes()
    }

    //metodos 
    middlewares(){
        //avisando a express que vai usar a estrutura JSON
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }
}

module.exports = new App().server
