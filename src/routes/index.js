const {Router } = require('express')
const router = Router()
router.get("/", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });

 module.exports = router