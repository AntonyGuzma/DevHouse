//metodos: index, show, update, store, destroy

const { query } = require('express')
const User = require('../models/User')

class SessioController{

    //funcao assincrona
    async store(req, res){

        const {email} = req.body;

        let user = await User.findOne({ email })

        //verificando se user já existe
        if(!user){
            user =  await User.create({ email })
        }
        
        //await espera a requisicao acabar
        //let user =  await User.create({ email })
        
        return res.json(user)   
    }
}

module.exports =   new SessioController()