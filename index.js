const express = require('express')
const { check } = require('express-validator')  
const router = express.Router()

const mailController = require('./mailController')

router.post('/',
    check('name').notEmpty(),
    check('email').notEmpty().isEmail(),
    check('message').notEmpty(),
    mailController.sendMail
)

module.exports = router