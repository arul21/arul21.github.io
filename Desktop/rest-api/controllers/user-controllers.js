const Model = require('../models')
const helper = require('../helpers/bcrypt')
const {jwtEncode} = require('../helpers/jwt')

module.exports = {
    doSignIn : (req, res) =>{
        Model.User.findOne({
            where : {
                email : req.body.email
            }
        })
        .then(found =>{
            let checked = helper.decode(req.body.password, found.password)
            if(checked){
                let token = jwtEncode({
                    name : found.name,
                    role : found.role
                })
                res.status(200).json({
                    message : `berhasil login`,
                    token : token
                })
            } else {
                res.status(200).json({
                    message : `User & Password Salah`
                })
            }
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    doSignUp : (req, res) =>{
        Model.User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        })
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },


    getAllUser : (req, res) =>{
        Model.User.findAll({})
        .then(user =>{
            res.status(200).json(user)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    singleUser : (req, res) =>{
        Model.User.findById(req.params.id)
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    createUser : (req, res) =>{
        Model.User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        })
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    deleteUser : (req, res) =>{
        Model.User.destroy({
            where : {id : req.params.id}
        })
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }, 

    editUser : (req, res)=>{
        Model.User.update({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        },{
            where : {id : req.params.id}
        })
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }
}