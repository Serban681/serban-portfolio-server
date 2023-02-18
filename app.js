const express = require('express')

require('dotenv').config({ path: 'variables.env' })

const app = express()
const routes = require('./index')
const cors = require('cors')

const port = process.env.PORT || 7000

app.use(express.json())

app.use(cors({
    origin: process.env.CLIENT_URL || "*"
}))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

app.use('/', routes)