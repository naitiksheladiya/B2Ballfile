import express from 'express'
import { addedcategory, getcategory } from '../crud/catelogadd.js'


const cate = express.Router()

cate.post('/category', async (req, res) => {
    const categorycd = await addedcategory(req.body)
    res.send(categorycd)
})

cate.get('/categoys', async (req, res) => {
    const categorygets = await getcategory()
    res.send(categorygets)
})

export default cate;