const {jwtDecode} = require('../helpers/jwt')
const jwt = require('jsonwebtoken')

module.exports = {
    isLogin : (req, res, next) =>{
        let token = req.headers.token
        let decod = jwt.verify(token, process.env.SECRET, function(err, data){
            if(err){
                res.status(500).json({
                    message : err
                })
            }else {
                req.decode = data
                next()
            }
        })
    },

    isAdmin : (req, res, next)=>{
        if(req.decode.role === 'admin'){
            next()
        }else {
            res.status(403).json({
                message : `Fobidden`
            })
        }
    }
}