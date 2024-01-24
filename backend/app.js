import express from 'express'
import dbcollection from './conetions/database.js'
import cors from 'cors'
import aip from './allaip/aip.js'
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080
dbcollection()
 
app.use('/',aip)

app.listen(PORT, () => {
    console.log("http://localhost" + PORT)
})



