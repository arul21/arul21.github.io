const router = require('express').Router()
const {getAllUser, singleUser, createUser, deleteUser, editUser} = require('../controllers/user-controllers')
const {isLogin, isAdmin} = require('../middleware/middleware')

router.get('/', isLogin, isAdmin, getAllUser )
router.get('/:id', isLogin, singleUser )
router.post('/', isLogin, isAdmin, createUser )
router.delete('/:id', isLogin, isAdmin, deleteUser )
router.put('/:id', isLogin, editUser )


module.exports = router