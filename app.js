const express = require('express')

require('dotenv').config({ path: 'variables.env' })

const app = express()
const routes = require('./index')
const cors = require('cors')

const port = process.env.PORT || 7000

app.use(express.json())

app.use(cors({
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}))

app.listen(port, () => {
    console.log(`Final server listening on port ${port}`)
})

app.use('/', routes)