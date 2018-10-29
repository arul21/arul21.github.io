const router = require('express').Router()
const {doSignUp, doSignIn} = require('../controllers/user-controllers')
const user = require('./user-router')

router.use('/api/users', user)
router.post('/api/signup', doSignUp )
router.post('/api/signin', doSignIn)


module.exports = router