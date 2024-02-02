import express from 'express'
import { addedcolor } from '../crud/coloradd.js'


const col = express.Router()

col.post('/color', async (req, res) => {
    const colorcd = await addedcolor(req.body)
    res.send(colorcd)
})

export default col;