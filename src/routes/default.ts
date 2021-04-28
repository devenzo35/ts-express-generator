import express = require("express")
const router= express.Router()

import {getRequest, 
        postRequest, 
        putRequest, 
        deleteRequest
} from "../controllers/users.controllers"

router.get('/', getRequest)
router.post('/', postRequest)
router.put('/', putRequest)
router.delete('/', deleteRequest)

export default router