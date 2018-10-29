const jwt = require('jsonwebtoken');
const secret = process.env.SECRET

module.exports = {
    jwtEncode : (data) =>{
        return jwt.sign(data, secret)
    },

//     jwtDecode : (token) =>{
//         return jwt.verify(token, secret)
//     }
}