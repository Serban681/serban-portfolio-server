const nodemailer = require('nodemailer')
const { validationResult } = require('express-validator')

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

exports.sendMail = async (req, res) => {
    try {
        const {errors} = validationResult(req)

        if(errors.length)
            return res.sendStatus(400)

        const user = req.body

        await transport.sendMail({
            from: `${user.name} <${user.email}>`,
            to: process.env.MY_EMAIL,
            subject: `Portfolio Message - ${user.name}`,
            text: user.message,
            html: `<p>${user.message}</p>`
        })

        return res.sendStatus(200)
    } catch (err) {
        console.log(err.message)
        return res.sendStatus(500)
    }
} 
