const {Router} = require('express')
const router = Router()
const productos = require('../productos.json')
router.get('/',(request,response) =>{
    response.json(productos)
})
module.exports = router;