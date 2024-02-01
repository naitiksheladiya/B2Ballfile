import express from 'express'
import dbcollection from './conetions/database.js'
import cors from 'cors'
import aip from './allaip/aip.js'
import costomer from './allaip/adduser.js'
const app = express()
app.use(cors())
app.use(express.json())
dbcollection()
const PORT = process.env.PORT || 8080

app.use('/', aip)
app.use('/', costomer)

app.listen(PORT, () => {
    console.log("http://localhost" + PORT)
})



