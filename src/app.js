//forma mais nova => import express from 'express' (para ser desse modo precisa do 'npm i sucrase' biblioteca)
const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

//classe para o APP
class App{

    constructor(){
        //const server = express()
        this.server = express()

        //configuração de conexão com o bando de dados
        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.u0ndkjm.mongodb.net/?retryWrites=true&w=majority&appName=devhouse')

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
//forma mais nova => export default routes 